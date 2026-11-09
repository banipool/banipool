# BaniPool

**Non-custodial multichain liquidity dashboard** — explore pools, add liquidity, create pools and swap on 10 chains with private-mempool protection.

🌐 Website: https://banipool.com · 𝕏: https://x.com/banipool · 📚 Docs: https://banipool.com/docs · 📰 Press kit: https://banipool.com/press

## What is BaniPool?

BaniPool is a non-custodial DeFi liquidity dashboard for **Ethereum, Base, BNB Smart Chain, Arbitrum One, OP Mainnet, Polygon PoS, Avalanche C-Chain, Robinhood Chain, Arc and Solana**.

- Explore **Uniswap v2/v3/v4, Aerodrome, Orca Whirlpools, Raydium, Meteora and PumpSwap** pools with live TVL, volume, fee APR and an A–F token security grade.
- **Add liquidity** with one token (Zap In) or two tokens; **Zap Out** to a single token.
- **Create new pools** with a fee advisor and a starting-price guard, seeded in one transaction.
- **Private mempool**: Solana transactions via Jito bundles (atomic, anti-sniper pool creation); automation on Ethereum & BNB Chain via private RPCs (Flashbots Protect, MEV Blocker, PancakeSwap MEV Guard, BlockRazor).
- **Automation** (keeper): out-of-range alerts, auto-compound, rebalance and exit, within limits the user signs on-chain.
- **Track** LP positions and daily PnL for any wallet; cross-chain swaps & bridge via Across.

Every transaction is simulated before signing; funds never leave the user's wallet.

## BNB Smart Chain contracts (chain ID 56)

| Contract | Purpose | Address |
|---|---|---|
| BaniZapV6 | Zap In / Zap Out (swap + add/remove liquidity in one transaction) | [`0xb3f4a7796d82f9b9a05cff40ecfa67c82585cde3`](https://bscscan.com/address/0xb3f4a7796d82f9b9a05cff40ecfa67c82585cde3) |
| BaniKeeperV6 | Automation keeper (compound / rebalance / exit within user-signed policy) | [`0x2f10f8e845084087f0a77ac4da06a5b49f54e970`](https://bscscan.com/address/0x2f10f8e845084087f0a77ac4da06a5b49f54e970) |
| BaniZapCreate | Create a Uniswap pool and seed first liquidity in one transaction | [`0x0d19f6350dafd0a6b81b2e8741c56ebda56507d6`](https://bscscan.com/address/0x0d19f6350dafd0a6b81b2e8741c56ebda56507d6) |

## Contracts on other networks

| Network | BaniZapV6 | BaniKeeperV6 | BaniZapCreate |
|---|---|---|---|
| Ethereum | `0xa8334238b1e24148bc1c3eb46ffc19bfd1d2b10e` | `0x352722bdeff5d86fa012372b92d999f98e3e5102` | `0x6747b1d8e30ce138c4ba7dd58d9faab0ed772c5d` |
| Base | `0x59d33d7a0f6030f00314099710dacb0ced285d82` | `0xa9709aaa16960332ba51ef1af6cfacac543ab2ae` | `0x7675540cc3dbd17378675258909d6e560ac43632` |
| Arbitrum One | `0x4974784abf68d1944736f9847ea791642deaaac9` | `0x9e449a01300be67d2053fc57e980105f0cf99519` | `0xc40f3e379e584e7956c066f54e0c9ec38bb7f5ec` |
| OP Mainnet | `0x7961d30d51953e977fab4260d4b9f5e48e7ac6a0` | `0x96b2ebe5c07f5435239df75b0f46fecbe3c8f3ae` | `0x6447648735ef3df4a54ff33400e55ba6f7c18b80` |
| Polygon PoS | `0x3693e2f820ea652a6ef218611afb0a4df750b90b` | `0x50eabe5cfb87e34f7316748fd28f044702891db8` | `0xf7355327dc29581769ab1c0037eb09c37ddbf1e1` |
| Avalanche C-Chain | `0x6747b1d8e30ce138c4ba7dd58d9faab0ed772c5d` | `0x4974784abf68d1944736f9847ea791642deaaac9` | `0x9e0a236b30aa90b0610e6bd2b23bfa3efd3889eb` |
| Robinhood Chain | `0x7fb2ca84343346ffdbeb2eca815d2b059c1f8605` | `0x24d8efd2a7fe14dc7af01c779ff61558980a0e5c` | `0x10fa3e3e4470343b4fc45846434c65c95a647093` |
| Arc | `0x6447648735ef3df4a54ff33400e55ba6f7c18b80` | `0xc4ca34d14b7b503d78b3f8c26b29bfd1be495249` | `0xfdc5ddde0524328b96d106ef9e88d0d3cbbca2b6` |

Swaps use the official Uniswap Universal Router; liquidity goes directly to the official DEX contracts and programs.

## Security

- Non-custodial: BaniPool never holds user funds or keys and never asks for a seed phrase.
- Token approvals are limited to the exact transaction amount.
- Platform fees are capped on-chain (Zap/swap max 1%, keeper compound max 10%) and always shown before signing.
- Contracts are reviewed internally and have not yet been audited by a third party. Use at your own risk; start small.

## Public API

Free public read API for multichain pool and position data: https://banipool.com/docs/api

```bash
curl -s "https://banipool.com/api/v1/pools?chain=bnb-chain&sort=tvl_desc&limit=5"
```

## Links

- Liquidity report (live data, 10 chains): https://banipool.com/en/laporan/likuiditas-defi
- Guides: https://banipool.com/en/guides
- Articles: https://banipool.com/en/artikel
