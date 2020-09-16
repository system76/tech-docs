# Thelio Massive (Parts & Repairs)

Many components in your Thelio Massive can be upgraded or replaced as necessary. Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the top case](#removing-the-top-case)
- [Removing the inner partition](#removing-the-inner-partition)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Replacing the case fans](#replacing-the-case-fans)
- [Replacing a GPU](#replacing-a-gpu)
- [Replacing the M.2 drive](#replacing-the-m2-drive)
- [Removing the CPU shroud](#removing-the-cpu-shroud)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler](#replacing-the-cpu-cooler)
- [Replacing the CPU/thermal paste](#replacing-the-cputhermal-paste)
- [Replacing the top exhaust fans](#replacing-the-top-exhaust-fans)
- [Troubleshooting the power button](#troubleshooting-the-power-button)
- [Troubleshooting the Thelio-IO USB connection](#troubleshooting-the-power-button)

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

## Adding/removing 2.5" storage drives:

Thelio Massive b1.2 supports up to eight 2.5" SATA III drives and up to four 2.5" U.2 NVMe drives (with SAS connectors.)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Unscrew the four screws holding the plastic screw cover onto the inner partition.

![Storage drive screw cover](./img/storage-drive-screw-cover.jpg)

3. Pop out one of the black plastic rings and slide four screws (per drive) out of the inner partition.

![Storage drive screws](./img/storage-drive-screws.jpg)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots above the Thelio-IO boards.

![2.5" drive installation](./img/storage-drive-installation.jpg)  

_In the below photo, the eight SATA slots are highlighted green, while the four U.2/SAS slots are highlighted blue._

![2.5" storage slots](./img/storage-drive-slots.jpg)

## Replacing the case fans:

Thelio Massive b1.2 has four case-mounted fans: two on the bottom, and two on the side next to the motherboard.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Unscrew the fan's screws on the opposite side from where it's mounted. (For the bottom fans, the machine will need to be tilted to access the screws on the bottom.)

![Case fan screws](./img/case-fan-screws.webp)

3. Unplug and remove the fan.
4. When replacing the fan, the components should be mounted in the following order:
    - Chassis
    - Dust filter
    - Acrylic spacer
    - Fan

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

_The connectors (highlighted above) attach the top exhaust fans to extension cables, which attach to a five-port hub along with the CPU fans. It is not necessary to remove the extension cables._

3. Unscrew the three back screws holding the CPU shroud in place.

![Back CPU shroud screws](./img/cpu-shroud-screws-back.jpg)

4. Unscrew the three side screws holding the CPU shroud in place (on the opposite side from the motherboard.)

![Side CPU shroud screws](./img/cpu-shroud-screws-side.jpg)

5. Pull the CPU shroud away from the machine.

_Note for older revisions: thelio-massive-b1.0 included two additional screws connecting the top crossbar to the CPU shroud. The top crossbar is not attached to the CPU shroud on this revision._

![Top crossbar screws](./img/top-crossbar-screws.webp)

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

## Replacing the CPU fans:

Thelio Massive b1.2 contains four CPU fans (two per CPU.) All coolers and fans are preinstalled, regardless of how many CPUs the system shipped with.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), and [remove the CPU shroud](#removing-the-CPU-shroud).
2. Each fan is secured by two clips (one on each side). Pull the clip down (away from the fan), then sideways (away from the heatsink) to release the fan.

![CPU fan clips](./img/cpu-fan-clips.jpg)

3. Once the fan is free, lift it away from the heatsink and unplug the four-pin connector attaching it to the Y-cable.
    - Two Y-cables connect two CPU fans each to a five-port hub, which also connects to the extension cables for the top exhaust fans.
    - The top exhaust fans plug into ports "FAN1" and "FAN2", while the CPU fans plug into ports "FAN3" and "FAN4". The port labeled "CPU" is left disconnected.

![CPU fan hub](./img/cpu-fan-hub.jpg)

4. If necessary, lift the bracket off of the old fan and place it onto the new fan.
5. Clip the fan back onto the heatsink and plug it into the Y-cable.


## Replacing the CPU cooler:

Thelio Massive b1.2 contains two CPU coolers (one for each CPU.) Each cooler contains two fans. All coolers and fans are preinstalled, regardless of how many CPUs the system shipped with.

**Tools required:** Hex key (included in Thelio Massive case), cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the CPU cooler:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the CPU shroud](#removing-the-CPU-shroud), and [remove the CPU fans](#replacing-the-cpu-fans) for the cooler you are removing.
2. Locate the hex key/Allen wrench, which is attached to the case via the velcro cable ties behind the motherboard.
3. While holding the cooler in place so it doesn't fall, loosen the cooler's screws in reverse order, starting with the center screws (labeled #2), then the corner screws (labeled #1).
    - The corner screws require reaching the hex key through the holes in the heatsink.

![CPU cooler screws](./img/cpu-cooler-screws.jpg)

_The CPU cooler screws are held in place by springs, and will not detatch once they are loosened._

4. Once all four screws are loosened, the CPU cooler (including the CPU) will lift away from the motherboard.
    - **Caution:** Be careful not to bend any of the gold pins on the CPU socket, and do not touch the gold pads on the CPU.
5. When replacing the CPU cooler, tighten the screws in the order they are labeled, starting with the corner screws (labeled #1), then the center screws (labeled #2).
    - See [Replacing the CPU/thermal paste](#replacing-the-cputhermal-paste) for more information about correctly orienting the CPU/cooler.

## Replacing the CPU/thermal paste:

The CPUs clip into the heatsinks before the heatsinks are installed onto the motherboard.

**Tools required:** Hex key (included in Thelio Massive case), cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the CPU/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the CPU shroud](#removing-the-CPU-shroud), [remove the CPU fans](#replacing-the-cpu-fans), and [remove the CPU cooler](#replacing-the-cpu-cooler).
2. The CPU is held onto the heatsink by two plastic clips. Release one of the clips by pulling down on the large plastic tab, then carefully lift the CPU off of the heatsink.
    - **Caution:** Do not touch the gold pads on the CPU.
    - It may take some pressure to break the seal of the thermal paste.

![CPU clips](./img/cpu-clips.jpg)

3. Remove the black plastic clip from the heatsink by pulling the tabs on each corner.
4. Using a paper towel, clean the existing thermal paste off of the heatsink and GPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.jpg)

5. Place the black plastic clip back onto the heatsink and apply thermal paste to the heatsink.
6. Place the CPU back into the black plastic clip. One corner of the CPU and one corner of the clip are marked with triangles; be sure to match these triangles together.

![CPU installation](./img/cpu-installation.webp)

7. Place the heatsink/CPU back onto the motherboard, matching the triangles on the CPU clip/CPU (highlighted above) with the diagonal corner on the CPU socket (highlighted below).

![CPU orientation](./img/motherboard-triangle.jpg)

8. See [Replacing the CPU cooler](#replacing-the-cpu-cooler) for more information about re-attaching the cooler to the motherboard.

## Replacing the top exhaust fans:

The top exhaust fans assist the CPU fans in expelling hot air from the case.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the top exhaust fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition). (The CPU shroud can optionally be [removed](#removing-the-cpu-shroud).)
2. Unscrew the three screws attaching the fan to the CPU shroud.

![Top exhaust fan screws](./img/top-fan-screws.jpg)

3. Unplug the fan from the extension cable and remove it from the case.
4. Screw the new fan into the CPU shroud, plug it in, and replace the inner partition and top case.

## Troubleshooting the power button:

If the front power button doesn't power the machine on or doesn't light up when the system is powered on, try the following troubleshooting steps:

1. Ensure the system powers on normally using the internal power button.
2. Reseat the front power button to ensure it's making proper contact.
3. Check the wiring for the front power button.
4. Replace the front power button, if necessary.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to power the machine on using the internal power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Push the small button labeled B0 on the Thelio-IO board closest to the front corner of the case.

![Internal power button](./img/b0-button.jpg)

### Steps to check the front power button wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right.

![Power button receptacle](./img/power-button-receptacle.jpg)

4. The front power button receptacle should plug into the `PFPD` port on the Thelio-IO board closest to the front corner of the machine, with the red wire on the left and the black wire on the right.

![Power button wiring on Thelio-IO board](./img/power-wiring-thelio-io.jpg)

5. The `PMBD` port on the Thelio-IO board should connect to the motherboard:
    - The red wire on the four-port connector should be on the left (the farthest in) on the Thelio-IO board.
    - The other side of the cable connects to the bottom right of the motherboard:
        - The individual black wire plugs into `POWERLED+`.
        - The individual red wire plugs into `POWERLED-`.
        - The two-wire connector plugs into `POWERBTN#` and `GND`, with the blue wire on the left (into `POWERBTN#`.)

![Power button wiring on motherboard](./img/power-wiring-motherboard.jpg)

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.

## Troubleshooting the Thelio-IO USB connection:

The Thelio-IO boards connect to the motherboard's USB headers for firmware updates and fan control within the host OS.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to check the USB wiring:

1. Two of the Thelio-IO boards have `USB0` ports. The port on each board connects to a four-pin cable with the red wire on the left (farthest into the case).
2. The two four-pin cables plug into the motherboard's USB headers just to the left of the [M.2 slot](#replacing-the-m2-drive).

![USB wiring on Thelio-IO board](./img/thelio-io-usb.webp)
