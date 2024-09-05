# Thelio Astra (thelio-astra-a1-n1)

- [External Overview](./external-overview.md)
- [Internal Overview](./internal-overview.md)
- [Parts & Repairs](./repairs.md)
- [Ubuntu 20.04 LTS Setup](./ubuntu-20.04.md)
- [Ubuntu 24.04 LTS Setup](./ubuntu-24.04.md)

![Thelio Astra](./img/thelio-astra-a1-n1.webp)

The System76 Thelio Astra is a desktop with the following specifications:

- Processor options
    - Supports Intel 14th generation (Raptor Lake) CPUs
        - [Ampere Altra M128-26](https://amperecomputing.com/briefs/ampere-altra-family-product-brief)
        - [Ampere Altra Q64-22](https://amperecomputing.com/briefs/ampere-altra-family-product-brief)
        - [Ampere Altra Q32-17](https://amperecomputing.com/briefs/ampere-altra-family-product-brief)
- Motherboard
    - [ASRock ALTRAD8UD-1L2T](https://www.asrockrack.com/general/productdetail.asp?Model=ALTRAD8UD-1L2T#Specifications) running System76 Firmware (non-open)
- Daughterboard
    - [Thelio Io](https://github.com/system76/thelio-io) board running [open-source firmware](https://github.com/system76/thelio-io-firmware)
        - Version 2.3
- Graphics options
    - Configured with up to one dedicated GPU
        - Primary GPU slot:
            - PCIe 4.0 x16
            - Up to 4-slot height
    - GPU size:
        - Internal clearance: 358.00mm
        - Recommended maximum length: 348.00mm
    - Tested with the following GPUs:
        - [NVIDIA RTX 6000 Ada]()
        - [NVIDIA RTX A6000]()
        - [NVIDIA RTX 4000 Ada]()
        - [NVIDIA RTX 2000 Ada]()
        - [NVIDIA GeForce RTX 4090](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/#specs)
            - 3x DisplayPort 1.4a
            - 1x HDMI 2.1a
        - [NVIDIA GeForce RTX 4080 Super](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4080-family/#specs)
            - 3x DisplayPort 1.4a
            - 1x HDMI 2.1
        - [NVIDIA GeForce RTX 4060 Ti](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060-4060ti/#specs)
            - 3x DisplayPort 1.4a
            - 1x HDMI 2.1
- Expansion
    - 1x PCIe 4.0 x16 (primary GPU slot)
    - 1x PCIe 4.0 x16 (half length)
    - 2x PCIe 4.0 x8
        - Fits physical x16 cards, runs at x8 bandwidth
- Memory
    - Up to 512GB (8x64GB) octa-channel DDR4 RDIMM/LRDIMMs @ 3200 MHz
    - Tested with the following RAM modules (may ship with other tested modules):
        - [Samsung M393A8G40AB2-CWE](https://semiconductor.samsung.com/us/dram/module/rdimm/m393a8g40ab2-cwe/#pd-semi-spec) (64GB/stick)
        - [Samsung M393A4K40DB3-CWE](https://semiconductor.samsung.com/us/dram/module/rdimm/m393a4k40db3-cwe/#pd-semi-spec) (32GB/stick)
- Networking
    - 2x 10-Gigabit Ethernet ([Intel X550](https://ark.intel.com/content/www/us/en/ark/products/88209/intel-ethernet-converged-network-adapter-x550-t2.html))
    - 1x 2.5-Gigabit Ethernet ([Intel i210](https://ark.intel.com/content/www/us/en/ark/products/64400/intel-ethernet-controller-i210-at.html))
- Power
    - C13 power cord
    - 850W PSU
    - 80+ Gold Efficiency
    - Tested with the following PSU models (may ship with other tested models):
        - [Be Quiet! Pure Power 12 M](https://www.bequiet.com/en/powersupply/4162)
        - [XPG Core Reactor II](https://www.xpg.com/us/xpg/pc-components-core-reactor-ii)
- Storage
    - 2x M.2 (PCIe NVMe Gen 4) SSDs
- USB
    - Back ports:
        - 4x USB 3.2 Gen 1 (Type-A)
