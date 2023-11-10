# Lemur Pro (lemp12)

- [External Overview](./external-overview.md)
- [Internal Overview](./internal-overview.md)
- [Parts & Repairs](./repairs.md)

![Lemur Pro](./img/lemp12.webp)

The System76 Lemur Pro is a laptop with the following specifications:

- CPU
    - Supports Intel 13th Generation (Raptor Lake) CPUs
        - [Core i7-1355U](https://ark.intel.com/content/www/us/en/ark/products/232160/intel-core-i71355u-processor-12m-cache-up-to-5-00-ghz.html)
        - [Core i5-1335U](https://ark.intel.com/content/www/us/en/ark/products/232153/intel-core-i51335u-processor-12m-cache-up-to-4-60-ghz.html)
- BIOS
    - Macronix MX25L25673G flash chip
        - WSON-8 form factor
    - Programmed with [System76 Open Firmware](https://github.com/system76/firmware-open)
- EC
    - ITE IT5570E
    - Programmed with [System76 EC](https://github.com/system76/ec)
- Graphics
    - GPU: Intel Iris Xe Graphics
        - GOP driver is recommended, VBT is provided
    - eDP display: 14.0" 1920x1080@60Hz LCD
        - LCD panel: Innolux N140HCE-EN2 (or equivalent)
    - External video outputs:
        - 1x HDMI 2.1
        - 1x DisplayPort 1.4 over USB-C
- Memory
    - Channel 0: 8-GB on-board DDR5
        - 4x [Samsung K4RAH165VB-BCQK](https://semiconductor.samsung.com/dram/ddr/ddr5/k4rah165vb-bcqk/) (2GB each)
    - Channel 1: 8-GB/16-GB/32-GB/48-GB DDR5 SO-DIMM @ 4800 MHz
- Networking
    - M.2 PCIe/CNVi WiFi/Bluetooth
        - Intel Wi-Fi 6E AX210/AX211
            - Bluetooth 5.3
- Power
    - 19V, 3.42A (65W) DC-in port
        - Barrel size: 5.5mm (outer), 2.5mm (inner)
    - Included AC adapter: AcBel ADA012
        - AC power cord type: IEC C7 (non-polarized)
    - USB-C charging compatible with 65W+ charger
    - 73Wh 4-cell Lithium-Ion battery
- Sound
    - Realtek ALC256-CGT audio chipset
    - Internal speakers & microphone
    - 3.5mm headphone/microphone combo jack
    - HDMI, USB-C DisplayPort audio
- Storage
    - 1x M.2 (PCIe NVMe Gen 4)
    - 1x M.2 (PCIe NVMe Gen 3 or SATA III)
    - MicroSD card reader (RTS5227S)
- USB
    - 1x USB Type-C with Thunderbolt 4
        - Supports DisplayPort over USB-C
        - Supports USB-C charging (USB-PD)
    - 1x USB 3.2 Gen 2 Type-A
    - 1x USB 3.2 Gen 1 Type-A
- Dimensions
    - 1.65cm x 32.2cm x 21.68cm, 1.15kg
