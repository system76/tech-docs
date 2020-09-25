# Thelio Massive (Internal Overview)

## Side overview:

![Internal overview (side)](./img/internal-overview-side.jpg)

- RAM slots are highlighted in green
- PCIe slots are highlighted in red
- M.2 SSD is highlighted in cyan
- Power supply is highlighted in yellow
- 2.5" drive slots are highlighted in purple
- Thelio-IO to motherboard connections are highlighted in olive

### PCIe slot guide:

From top to bottom:

1. PCIe Gen 3 x16 slot (GPU 4)
    - Only available if two CPUs are installed
2. PCIe Gen 3 x8 slot
    - Only available if two CPUs are installed
3. PCIe Gen 3 x16 slot (GPU 1)
    - Runs at x8 if slot 4 (immediately below) is also in use
4. PCIe Gen 3 x8 slot
5. PCIe Gen 3 x16 slot (GPU 2)
6. PCIe Gen 3 x8 slot
    - Only available if two CPUs are installed
7. PCIe Gen 3 x16 slot (GPU 3)
    - Only available if two CPUs are installed

See the repairs page for [GPU installation instructions](./repairs.md#replacing-a-gpu), including recommended GPU placement.

## Top overview:

![Internal overview (top)](./img/internal-overview-top.jpg)

- RAM slot clips are highlighted in green
- Top exhaust fans are highlighted in yellow
- SATA ports are highlighted in cyan
- SAS (U.2) ports are highlighted in purple
- Power button receptacle is highlighted in red
