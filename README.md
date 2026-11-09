# BaniPool

A non-custodial multichain liquidity dashboard — explore pools, add liquidity, create pools and swap with private-mempool protection — built on **BNB Smart Chain (BSC)** and compatible with other EVM networks and Solana.

🌐 Website: https://banipool.com · 𝕏: https://x.com/banipool · 📚 Docs: https://banipool.com/docs · 📰 Press kit: https://banipool.com/press

## Technology Stack

- **Blockchain**: BNB Smart Chain + EVM-compatible chains (Ethereum, Base, Arbitrum One, OP Mainnet, Polygon PoS, Avalanche C-Chain, Robinhood Chain, Arc) + Solana
- **Smart Contracts**: Solidity 0.8.26 (optimizer 1000 runs, evmVersion paris); Solana program in Rust (Anchor)
- **Frontend**: Next.js 16 + React 19, EIP-1193 / EIP-6963 wallets + WalletConnect; Solana wallet-standard (Phantom, Solflare, Backpack)
- **Backend**: Rust (axum) API + on-chain indexer, PostgreSQL
- **Development**: solc 0.8.26, Hardhat (mainnet-fork tests), viem; contracts verified on Sourcify (exact match)

## Supported Networks

- **BNB Smart Chain Mainnet** (Chain ID: 56)
- **Ethereum Mainnet** (Chain ID: 1)
- **Base** (Chain ID: 8453)
- **Arbitrum One** (Chain ID: 42161)
- **OP Mainnet** (Chain ID: 10)
- **Polygon PoS** (Chain ID: 137)
- **Avalanche C-Chain** (Chain ID: 43114)
- **Robinhood Chain** (Chain ID: 4663)
- **Arc** (Chain ID: 5042)
- **Solana Mainnet**

## Contract Addresses

BaniPool has **no token**. Core contracts per network:

| Network | Core Contract (BaniZapV6 — Zap In/Out) | Token Contract | Keeper (BaniKeeperV6) | Pool creator (BaniZapCreate) |
|----------|---------------|----------------|----------------|----------------|
| BNB Mainnet | [0xb3f4a7796d82f9b9a05cff40ecfa67c82585cde3](https://bscscan.com/address/0xb3f4a7796d82f9b9a05cff40ecfa67c82585cde3) | — (no token) | [0x2f10f8e845084087f0a77ac4da06a5b49f54e970](https://bscscan.com/address/0x2f10f8e845084087f0a77ac4da06a5b49f54e970) | [0x0d19f6350dafd0a6b81b2e8741c56ebda56507d6](https://bscscan.com/address/0x0d19f6350dafd0a6b81b2e8741c56ebda56507d6) |
| Ethereum | 0xa8334238b1e24148bc1c3eb46ffc19bfd1d2b10e | — | 0x352722bdeff5d86fa012372b92d999f98e3e5102 | 0x6747b1d8e30ce138c4ba7dd58d9faab0ed772c5d |
| Base | 0x59d33d7a0f6030f00314099710dacb0ced285d82 | — | 0xa9709aaa16960332ba51ef1af6cfacac543ab2ae | 0x7675540cc3dbd17378675258909d6e560ac43632 |
| Arbitrum One | 0x4974784abf68d1944736f9847ea791642deaaac9 | — | 0x9e449a01300be67d2053fc57e980105f0cf99519 | 0xc40f3e379e584e7956c066f54e0c9ec38bb7f5ec |
| OP Mainnet | 0x7961d30d51953e977fab4260d4b9f5e48e7ac6a0 | — | 0x96b2ebe5c07f5435239df75b0f46fecbe3c8f3ae | 0x6447648735ef3df4a54ff33400e55ba6f7c18b80 |
| Polygon PoS | 0x3693e2f820ea652a6ef218611afb0a4df750b90b | — | 0x50eabe5cfb87e34f7316748fd28f044702891db8 | 0xf7355327dc29581769ab1c0037eb09c37ddbf1e1 |
| Avalanche C-Chain | 0x6747b1d8e30ce138c4ba7dd58d9faab0ed772c5d | — | 0x4974784abf68d1944736f9847ea791642deaaac9 | 0x9e0a236b30aa90b0610e6bd2b23bfa3efd3889eb |
| Robinhood Chain | 0x7fb2ca84343346ffdbeb2eca815d2b059c1f8605 | — | 0x24d8efd2a7fe14dc7af01c779ff61558980a0e5c | 0x10fa3e3e4470343b4fc45846434c65c95a647093 |
| Arc | 0x6447648735ef3df4a54ff33400e55ba6f7c18b80 | — | 0xc4ca34d14b7b503d78b3f8c26b29bfd1be495249 | 0xfdc5ddde0524328b96d106ef9e88d0d3cbbca2b6 |

The BNB Smart Chain contracts are verified on [Sourcify](https://sourcify.dev) with an exact match (runtime and creation bytecode).

**Solana** — BaniPool keeper program: [`2tKdYPsJy6aejPYoJu5C2owXFcy6LoZzXxvgqvjGLU7U`](https://solscan.io/account/2tKdYPsJy6aejPYoJu5C2owXFcy6LoZzXxvgqvjGLU7U). Liquidity goes directly to the official DEX programs: Orca Whirlpools `whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc`, Raydium CLMM `CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK`, Raydium CPMM `CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C`, Meteora DLMM `LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo`, Meteora DAMM v2 `cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG`, PumpSwap `pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA`.

## Features

- **Liquidity explorer on BNB Chain and 9 more networks**: Uniswap v2/v3/v4, Aerodrome, Orca, Raydium, Meteora and PumpSwap pools with live TVL, volume, fee APR and an A–F token security grade.
- **One-token Zap In / Zap Out**: swap + add (or remove) liquidity in a single transaction through BaniZapV6.
- **Create new pools in one transaction** (BaniZapCreate) with a fee advisor and a starting-price guard against arbitrage.
- **Private mempool / anti-sandwich**: BNB Chain and Ethereum automation is sent through private RPCs (PancakeSwap MEV Guard, BlockRazor, Flashbots Protect, MEV Blocker); Solana uses Jito bundles.
- **Automation keeper** (BaniKeeperV6): out-of-range alerts, auto-compound, rebalance and exit — only within a policy the user signs on-chain, results always sent to the user's wallet.
- **Non-custodial and gas-efficient**: no token, no custody; exact-amount approvals; every transaction simulated before signing; platform fees capped on-chain (Zap/swap max 1%, keeper compound max 10%).

## Security

- BaniPool never holds user funds or keys and never asks for a seed phrase.
- Contracts are reviewed internally and verified on Sourcify; they have not yet been audited by a third party. Use at your own risk and start small.

## Public API

Free public read API for multichain pool and position data: https://banipool.com/docs/api

```bash
curl -s "https://banipool.com/api/v1/pools?chain=bnb-chain&sort=tvl_desc&limit=5"
```

## Links

- Liquidity report (live data, 10 chains): https://banipool.com/en/laporan/likuiditas-defi
- Guides: https://banipool.com/en/guides
- Articles: https://banipool.com/en/artikel
