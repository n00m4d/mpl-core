use borsh::{BorshDeserialize, BorshSerialize};
use mpl_utils::assert_signer;
use solana_program::{account_info::AccountInfo, entrypoint::ProgramResult, msg};

use crate::{
    error::MplCoreError,
    instruction::accounts::{
        ApproveCollectionPluginAuthorityAccounts, ApprovePluginAuthorityAccounts,
    },
    plugins::{approve_authority_on_plugin, PluginType},
    state::{Asset, Authority, Collection, CoreAsset, DataBlob, Key, SolanaAccount},
    utils::{fetch_core_data, load_key, resolve_payer},
};

#[repr(C)]
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Eq, Debug, Clone)]
pub(crate) struct ApprovePluginAuthorityArgs {
    pub plugin_type: PluginType,
    pub new_authority: Authority,
}

pub(crate) fn approve_plugin_authority<'a>(
    accounts: &'a [AccountInfo<'a>],
    args: ApprovePluginAuthorityArgs,
) -> ProgramResult {
    let ctx = ApprovePluginAuthorityAccounts::context(accounts)?;

    // Guards.
    assert_signer(ctx.accounts.authority)?;
    let payer = resolve_payer(ctx.accounts.authority, ctx.accounts.payer)?;

    if let Key::HashedAsset = load_key(ctx.accounts.asset, 0)? {
        msg!("Error: Approve plugin authority for compressed is not available");
        return Err(MplCoreError::NotAvailable.into());
    }

    process_approve_plugin_authority::<Asset>(
        ctx.accounts.asset,
        ctx.accounts.authority,
        payer,
        ctx.accounts.system_program,
        &args.plugin_type,
        &args.new_authority,
    )
}

#[repr(C)]
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Eq, Debug, Clone)]
pub(crate) struct ApproveCollectionPluginAuthorityArgs {
    pub plugin_type: PluginType,
    pub new_authority: Authority,
}

pub(crate) fn approve_collection_plugin_authority<'a>(
    accounts: &'a [AccountInfo<'a>],
    args: ApproveCollectionPluginAuthorityArgs,
) -> ProgramResult {
    let ctx = ApproveCollectionPluginAuthorityAccounts::context(accounts)?;

    // Guards.
    assert_signer(ctx.accounts.authority)?;
    let payer = resolve_payer(ctx.accounts.authority, ctx.accounts.payer)?;

    process_approve_plugin_authority::<Collection>(
        ctx.accounts.collection,
        ctx.accounts.authority,
        payer,
        ctx.accounts.system_program,
        &args.plugin_type,
        &args.new_authority,
    )
}

fn process_approve_plugin_authority<'a, T: CoreAsset + DataBlob + SolanaAccount>(
    core_info: &AccountInfo<'a>,
    authority: &AccountInfo<'a>,
    payer: &AccountInfo<'a>,
    system_program: &AccountInfo<'a>,
    plugin_type: &PluginType,
    new_authority: &Authority,
) -> ProgramResult {
    let (core, plugin_header, plugin_registry) = fetch_core_data::<T>(core_info)?;

    let plugin_header = match plugin_header {
        Some(header) => header,
        None => return Err(MplCoreError::PluginsNotInitialized.into()),
    };

    let mut plugin_registry = match plugin_registry {
        Some(registry) => registry,
        None => return Err(MplCoreError::PluginsNotInitialized.into()),
    };

    approve_authority_on_plugin(
        plugin_type,
        authority,
        new_authority,
        &core,
        core_info,
        &plugin_header,
        &mut plugin_registry,
        payer,
        system_program,
    )
}
