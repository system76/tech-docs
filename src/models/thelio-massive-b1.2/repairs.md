# Thelio Massive (Parts & Repairs)

Many components in your Thelio Massive can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the top case](#removing-the-top-case)
- [Removing the inner partition](#removing-the-inner-partition)
- [Replacing a GPU](#replacing-a-gpu)
- [Replacing the M.2 drive](#replacing-the-m2-drive)
- [Removing the CPU shroud](#removing-the-cpu-shroud)
- [Replacing the RAM](#replacing-the-ram)

## Removing the top case:

The top case can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top case:

1. Remove the eight outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.jpg)

2. Slide the top case up and off of the machine.

## Removing the inner partition:

The inner partition provides a brace for the outer case and helps hold the internal components in place. The partition needs to be removed to access most internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the inner partition:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the three additional back screws holding the inner partition in place from the back.

![Back partition screws](./img/partition-screws-back.jpg)

3. Unscrew the three inner screws holding the partition in place from the side.

![Side partition screws](./img/partition-screws-side.jpg)

4. Lift the inner partition away from the case.

## Replacing a GPU:

Thelio Massive supports up to four dual-slot GPUs with PCIe 3.0 x16. Mixing NVIDIA and AMD GPUs is not recommended.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace a GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Unscrew the four back screws holding the PCIe bracket in place, then remove the PCIe bracket.

![PCIe bracket screws](./img/pcie-bracket-screws.jpg)

3. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/gpu-power.jpg)

4. Hold the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.
    - If removing one of the inner GPUs, it may be necessary to remove one of the outer GPUs first in order to reach the latch.
    - If space is tight, a long object such as a screwdriver can be used to press the latch.

![PCIe latches](./img/pcie-latches.jpg)

5. When installing new GPUs, the slots should be utilized in the following order:
    - Primary GPU: third slot from the top.
    - Secondary GPU: fifth slot from the top.
    - Tertiary GPU: seventh slot from the top (bottom slot).
    - Quaternary GPU: top slot.

![GPU slot order](./img/gpu-slot-order.webp)

6. After inserting the new GPU into its slot, connect the power cables. _The maximum number of power cables are preinstalled in your system, but some may be tied back using velcro if the system shipped with less than four GPUs._
7. Once all GPUs are installed, replace the back PCIe bracket, inner partition, and top case.
    - The inner partition includes a plastic GPU brace, which may be sized differently depending on how many GPUs your system shipped with. To remove the brace, unscrew it from the inner partition.

## Replacing the M.2 drive:

Thelio Massive has one M.2 slot, which supports either PCIe NVMe Gen 3 x4 or SATA III. The following M.2 sizes are supported: 2242, 2260, 2280, 22110.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), and [remove the GPUs](#replacing-a-gpu).
2. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slot screw](./img/m2-screw.jpg)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.
6. Replace the GPUs, inner partition, and top case.

## Removing the CPU shroud:

The CPU shroud guides airflow through the CPU coolers. It covers the CPUs and RAM slots on the motherboard.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU shroud:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Unplug the connectors for the two top exhaust fans. (The top exhaust fans are secured to the CPU shroud.)

![Top exhaust fans](./img/top-fan-connectors.jpg)

3. Unscrew the three back screws holding the CPU shroud in place.

![Back CPU shroud screws](./img/cpu-shroud-screws-back.jpg)

4. Unscrew the three side screws holding the CPU shroud in place (on the opposite side from the motherboard.)

![Side CPU shroud screws](./img/cpu-shroud-screws-side.jpg)

5. Pull the CPU shroud away from the machine.

## Replacing the RAM:

Thelio Massive b1.2 supports up to 1536GB (12x128GB) of RAM, or 768GB (6x128GB) per CPU. The RAM is Registered ECC DDR4 DIMMs running at a speed of 2933MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), and [remove the CPU shroud](#removing-the-CPU-shroud).
2. To remove an existing RAM stick, flip the top latch up away from the stick, then pull the stick out of the slot, starting from the top edge. (The bottom of the RAM slot does not move.)

![RAM slots](./img/ram-slots.jpg)

3. Insert the new RAM (or re-seat the existing RAM) into the slot. The RAM stick will only fit in one direction; the larger group of pins goes on top. Use the following guides for placement of the RAM sticks:
    - Single-CPU RAM slot placement:
    ![1-CPU RAM order](./img/ram-order-1cpu.jpg)
    - Dual-CPU RAM slot placement:
    ![2-CPU RAM order](./img/ram-order-2cpu.jpg)

4. Replace the CPU shroud, inner partition, and top case.

