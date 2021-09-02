# Thelio Mira (Parts & Repairs)

Many components in your Thelio Mira can be upgraded or replaced as necessary. Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the top case](#removing-the-top-case)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Replacing the case fans](#replacing-the-case-fans)
- [Replacing a GPU](#replacing-a-gpu)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Removing the CPU shroud](#removing-the-cpu-shroud)
- [Replacing the RAM](#replacing-the-ram)
- [Removing the top crossbar](#removing-the-top-crossbar)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the power supply](#replacing-the-power-supply)
- [Replacing the side fans](#replacing-the-side-fans)
- [Replacing the Thelio-IO boards](#replacing-the-thelio-io-boards)
- [Troubleshooting the power button](#troubleshooting-the-power-button)
- [Troubleshooting the Thelio-IO USB connection](#troubleshooting-the-thelio-io-usb-connection)

## Removing the top case:

The top case can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top case:

1. Remove the eight outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.webp)

2. Slide the top case up and off of the machine.

## Adding/removing 2.5" storage drives:

Thelio Mira b1.0 supports up to four 2.5" SATA III drives. (Check M.2 restrictions)

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two screws securing the drive bay's cover.

![SATA slot cover](./img/sata-slot-cover.webp)

3. If you are adding a new drive, pop out the black plastic ring on the top crossbar and slide out four screws (per drive).

![Storage drive screws](./img/storage-drive-screws.webp)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots leading to the Thelio-IO boards.

![2.5" drive installation](./img/storage-drive-installation.webp)  

## Replacing the case fans:

Thelio Mira b1.0 has two case-mounted fans: one on the bottom, and one on the side next to the motherboard.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the side case fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Unscrew the fan's screws on the opposite side from where it's mounted.

![Case fan screws](./img/case-fan-screws-side.jpg)

3. Unplug and remove the fan.
4. When replacing the fan, the components should be mounted in the following order:
    - Chassis
    - Dust filter
    - Acrylic spacer
    - Fan

### Steps to replace the bottom case fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Pull the rubber tabs until they come loose from the plastic pins holding the fan in place.

![Case fan rubber mounts](./img/case-fan-mounts-bottom.jpg)

3. When replacing the fan, hold the rubber tabs in place while pushing the plastic pins in from below the machine (it's necessary to tilt the machine when inserting the plastic pins.)

![Case fan plastic pins](./img/case-fan-pins-bottom.jpg)

4. The components should be mounted in the following order:
    - Chassis
    - Dust filter
    - Acrylic spacer
    - Fan

## Replacing a GPU:

Thelio Mira supports up to four dual-slot GPUs, two with PCIe 4.0 x16 and two with PCIe 4.0 x8 (x16 cards will run at reduced bandwidth in the x8 slots.) Mixing NVIDIA and AMD GPUs is not recommended.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace a GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Unscrew the two back screws holding the PCIe bracket in place, then slide the PCIe bracket open.

![PCIe bracket screws](./img/pcie-bracket.webp)

3. Unscrew the four screws holding the side GPU brace in place. Remove the brace.

![GPU brace screws](./img/gpu-brace-screws.webp)

4. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/gpu-power.jpg)

5. Hold the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.
    - If removing one of the inner GPUs, it may be necessary to remove one of the outer GPUs first in order to reach the latch.
    - If space is tight, a long object such as a screwdriver can be used to press the latch.

![GPU order & PCIe latches](./img/gpu-slots.jpg)

6. When installing new GPUs, the slots should be utilized in the following order:
    - Primary GPU: top slot.
    - Secondary GPU: third slot from the top.
    - Tertiary GPU: fourth slot from the top (bottom slot).
    - Quaternary GPU: second slot from the top.
7. After inserting the new GPU into its slot, connect the power cables.
    - The maximum number of power cables are preinstalled in your system, but some may be tied back using velcro if the system shipped with less than four GPUs.
8. Once all GPUs are installed, replace the side GPU brace, back PCIe bracket, inner partition, and top case.
    - The side GPU brace includes a plastic piece sized to the GPUs that originally shipped with the system. To remove the plastic piece, unscrew it from the brace.

![GPU brace screws](./img/gpu-brace-plastic-screws.jpg)

_The plastic GPU brace's primary function is to prevent damage during shipping. The system can be run without the brace if it doesn't fit an upgraded card; the back PCIe bracket provides primary support for the GPUs._

## Replacing the M.2 drives:

Thelio Mira has four M.2 slots, which support PCIe NVMe Gen 4 x4, PCIe NVMe Gen 3 x4, or SATA III. The following restrictions apply:

- Top M.2 slot: Supports sizes 22110, 2280, and 2260.
- Middle M.2 slot: Supports sizes 22110 and 2280.
- Bottom left M.2 slot: Supports sizes 22110 and 2280.
- Bottom right M.2 slot:
    - Supports size 2280.
    - If a SATA drive is installed in this slot, then 2.5" SATA ports 4 and 5 will be unavailable.
    - If a PCIe NVMe drive is installed in this slot, then 2.5" SATA ports 4, 5, 6, and 7 will be unavailable.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 23 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), and [remove the GPU brace and GPUs](#replacing-a-gpu).
2. Remove the M.2 heatsink covering the slots you wish to access.
    - The top and middle M.2 slots are behind the top M.2 heatsink (highlighted cyan below).
    - The bottom left and bottom right M.2 slots are behind the bottom M.2 heatsink (highlighted yellow below).

![M.2 heatsink screws](./img/m2-heatsink-screws.jpg)

_It may take some pressure to remove the heatsink and thermal tape from the M.2 drive. Pull slowly to avoid breaking the thermal tape._

3. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slot screws](./img/m2-screws.jpg)

4. Remove the existing M.2 drive by pulling it out of the slot.
5. Insert the new M.2 drive into the slot and hold it in place.
6. Replace the retainer screw.
7. If utilizing a slot for the first time, peel the plastic backing off of the heatsink to expose the double-sided thermal tape for that slot.

![M.2 thermal tape](./img/m2-thermal-tape.jpg)

8. Replace the M.2 heatsinks, GPUs, GPU brace, inner partition, and top case.

## Removing the CPU shroud:

The CPU shroud guides airflow through the CPU coolers. It covers the CPU and RAM slots on the motherboard.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU shroud:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), and [remove the GPU brace](#replacing-a-gpu).
2. Unplug the connectors for the two CPU shroud-mounted fans.

![Top exhaust fans](./img/top-fan-connectors.jpg)

3. Unscrew the four back screws holding the CPU shroud in place.

![CPU shroud screws](./img/cpu-shroud-screws.jpg)

5. Pull the CPU shroud away from the machine.

## Replacing the RAM:

Thelio Mira b1.0 supports up to 256GB (8x32GB) of RAM. The RAM sticks are Unregistered/Unbuffered ECC DDR4 DIMMs running at a speed of 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. To remove an existing RAM stick, flip the bottom latch down away from the stick, then pull the stick out of the slot, starting from the bottom edge. (The top of the RAM slot does not move.)

![RAM slots](./img/ram-slots.jpg)

_The CPU cooler has been removed for better visibility in the above photo; removing the CPU cooler is not required to access all eight of the RAM slots._

3. Make sure the tab on the bottom of the slot is open (pulled downwards), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. On the left side of the CPU, the larger group of pins goes on bottom; on the right side of the CPU, the larger group of pins goes on top.
    - Use the following guide for placement of the RAM sticks:

![RAM slot order](./img/ram-order.webp)

4. Replace the CPU shroud, GPU brace, inner partition, and top case.

## Removing the top crossbar:

The top crossbar provides a brace for the outer case. It needs to be removed when replacing certain components (such as the top Thelio-IO board and the CPU cooler-mounted fan.)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the top crossbar:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unplug the two top fan connectors.

![Top fan connectors](./img/top-fan-connectors.jpg)

3. Unscrew the four screws holding the top crossbar in place (two on the front of the machine, and two on the back.)

![Top crossbar screws](./img/top-crossbar-screws.webp)

4. Lift the top crossbar out of the system. (It is not necessary to unplug the fan cable underneath the top crossbar unless you are replacing that cable or the Thelio-IO board it plugs into.)

## Replacing the CPU fans:

Thelio Mira b1.0 contains three CPU fans. Two are mounted on the CPU shroud, and one is mounted on the cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the shroud-mounted CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. To remove the back CPU shroud fan, unscrew the four screws holding the fan brackets into the shroud (highlighted green below).

![CPU shroud inner screws](./img/cpu-shroud-screws-inner.webp)

3. Free the cable from the velcro loop (highlighted blue above), then unscrew the four screws holding the brackets onto the fan.

![CPU shroud back fan screws](./img/cpu-shroud-fan-screws-back.jpg)

4. To remove the front CPU shroud fan, unscrew the four screws attaching the front of the shroud to the back (highlighted red above).
5. Then, unscrew the four screws attaching the fan to the shroud.

![CPU shroud front fan screws](./img/cpu-shroud-fan-screws-front.jpg)

### Steps to replace the cooler-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace and GPUs](#replacing-a-gpu), [remove the CPU shroud](#removing-the-cpu-shroud), and [remove the top crossbar](#removing-the-top-crossbar).
2. Pull the corners of the fan's top clip away from the heatsink it's held to.

![CPU cooler fan top clip](./img/cpu-cooler-fan-clip.jpg)

3. Repeat the process for the bottom clip, then slide the fan down and out of the CPU cooler.
4. Unplug the fan from the Thelio-IO board.
    - The CPU cooler fan plugs directly into the `CPUOUT0` port on the bottom Thelio-IO board.
5. When reinstalling the CPU fans, all three fans should be oriented so the side with the non-spinning cover faces the back of the machine, while the spinning side faces the front of the machine.

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler.

The CPU uses an AMD sTRX4 socket.

**Tools required:** Cross-head (Phillips) screwdriver (long), torx screwdriver, thermal paste  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace and GPUs](#replacing-a-gpu), [remove the CPU shroud](#removing-the-cpu-shroud), [remove the top crossbar](#removing-the-top-crossbar), and [remove the cooler-mounted CPU fan](#steps-to-replace-the-cooler-mounted-cpu-fan).
2. Unscrew the two screw access covers from the holes in the cooler plate.

![CPU cooler screws](./img/cpu-cooler-screws.jpg)

3. While holding the cooler in place so it doesn't fall, reach a cross-head (Phillips) screwdriver through the holes in the cooler plate and loosen the two screws holding the cooler onto the mounting bracket.
4. The cooler will come away from the CPU.
    - The two screws on the crossbar attaching the CPU cooler to the mounting bracket are held to the crossbar with small rubber rings.
    - If the rubber rings become detached, slide them back onto the screws before reinstalling the cooler.

![CPU cooler crossbar screws](./img/cpu-cooler-crossbar-screws.jpg)

5. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

### Steps to replace the CPU:

1. Unscrew the four screws holding the two mounting brackets onto the motherboard.

![CPU cooler mounting bracket screws](./img/cpu-cooler-mounting-bracket-screws.jpg)

2. The black plastic standoff covers will also come loose once the mounting bracket screws are removed. Remember to replace the black plastic standoff covers when reinstalling the mounting brackets.

![CPU cooler mounting bracket standoff covers](./img/cpu-cooler-mounting-bracket-standoff-covers.jpg)

3. Using the torx screwdriver, loosen the three CPU cover screws in reverse order (starting with #3, then #2, and finally #1.)
    - These screws will not come out of the CPU cover when they are fully loosened.

![CPU cover screws](./img/cpu-cover-screws.jpg)

4. The CPU cover will lower once its screws are loosened. There may be additional remnants of thermal paste underneath the CPU cover.
5. Pull the blue metal tabs away from the motherboard to flip the CPU holder down on top of the CPU cover.
    - **Caution:** Be careful not to bend any of the gold pins on the CPU socket, and do not touch the gold pads on the CPU.

![CPU holder lowering](./img/cpu-holder-lowering.webp)

6. Pull the orange tab to slide the CPU out of the CPU holder.

![CPU removal](./img/cpu-removal.webp)

7. Each AMD Threadripper CPU is shipped inside of an orange plastic clip, so it should not be necessary to remove the CPU from the orange plastic clip. However, if desired (such as to clean off additional thermal paste), the plastic clip can be removed by pulling it back near each of the tabs holding the CPU in place.
    - When reinstalling the CPU into the clip, be sure to match the original orientation, with the triangle on the CPU closest to the tab on the plastic clip.

![CPU clip](./img/cpu-clip.jpg)

8. Slide the new CPU into the CPU holder. Make sure the orange CPU clip aligns properly with the black rails on the CPU holder.
9. Fold the CPU holder up onto the motherboard until it clicks into place, fold the CPU cover back into place, and tighten the CPU cover screws in ascending order (starting with #1, then #2, and finally #3.)
10. Screw the two mounting brackets for the CPU cooler back onto the motherboard (the smaller bracket goes above the CPU, while the larger bracket goes below the CPU.)

### Steps to install the thermal paste/CPU cooler:

1. Place a line of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste.jpg)

2. Slide the CPU cooler crossbar on the back of the heatsink until the grooves are positioned correctly.

![CPU cooler crossbar](./img/cpu-cooler-crossbar.jpg)

3. While holding the crossbar onto the heatsink, hold the heatsink in position and use the long cross-head screwdriver (inserted through the holes in the cooler plate) to screw each end of the crossbar into one of the mounting brackets.
    - The logo on the cooler should be upright.
    - The rubber strips on the inside of the cooler should be closest to the back of the machine, while the rubber strips on the outside of the cooler should be closest to the front of the machine.

![CPU cooler orientation](./img/cpu-cooler-orientation.jpg)

4. Reinstall the cooler-mounted CPU fan, top crossbar, CPU shroud, GPUs, GPU bracket, inner partition, and top case.

## Replacing the power supply:

The power supply unit (PSU) is modular and can be replaced with another unit of the same model. Different models may not be compatible with the cabling pre-installed in the Thelio Mira.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition) and [remove the GPU brace and GPUs](#replacing-a-gpu).
2. Unplug all of the modular cabling from the back of the PSU.
    - Some of the cables may be easier to unplug after the PSU has been unscrewed/removed from the case.

![PSU cabling](./img/psu-cabling.jpg)

3. Unscrew the PSU bracket from the reverse side of the case.

![PSU bracket side screw](./img/psu-bracket-screw-side.jpg)

4. Unscrew the PSU bracket from the bottom of the case.

![PSU bracket bottom screw](./img/psu-bracket-screw-bottom.jpg)

5. Remove the PSU bracket.
6. Unscrew the four screws holding the PSU in from the back of the case.

![PSU back screws](./img/psu-screws.jpg)

7. Remove/replace the PSU. Set the replacement PSU on top of the two rubber posts that hold it at the correct height.
    - The replacement PSU should be installed with the fan facing the bottom of the case.

![PSU posts](./img/psu-posts.jpg)

8. After screwing in the replacement PSU and replacing the PSU bracket, use the labels and pin counts on the cables and ports to ensure the power cables are reconnected in the proper locations.
    - Remember that not all of the available connectors will plug into the PSU-- eight connectors (on four cables) are to be plugged into the GPUs.
9. If the replacement PSU has an "ECO Mode" switch, make sure it is switched on.

![PSU eco mode switch](./img/psu-eco-mode.jpg)

## Replacing the side fans:

Thelio Mira b1.0 has two intake fans mounted on the inner partition. The fans can be replaced if they become defective/noisy.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the side fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the inner partition](#removing-the-inner-partition).
2. Pull the rubber tabs until they come loose from the plastic pins holding the fan in place.

![Side fan rubber mounts](./img/side-fan-mounts.jpg)

3. Pull the end of the fan cable through the opening and release any velcro strips that are holding it in place.
4. When replacing the fan, hold the rubber tabs in place while pushing the plastic pins in from the opposite side.

![Side fan plastic pins](./img/side-fan-pins.jpg)

## Replacing the Thelio-IO boards:

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

The Thelio-IO board handles the front power button, fan control, and 2.5" SATA connectors for the system. If one of the Thelio-IO boards becomes defective, it can be replaced using the instructions below.

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the top crossbar](#removing-the-top-crossbar), and [remove the front cover from the 2.5" drive cage](#addingremoving-25-storage-drives) for the Thelio-IO board that is being replaced.
2. Use the cutouts on the opposite side of the chassis to unplug all cabling from the Thelio-IO board that is being replaced.

![Thelio-IO cabling cutouts](./img/thelio-io-cabling-cutouts.jpg)

3. Unscrew the two screws on the top of the upper drive cage (for the top Thelio-IO board) or the bottom of the lower drive cage (for the bottom Thelio-IO board).

![Thelio-IO drive cage screws](./img/thelio-io-drive-cage-screws.jpg)

4. While pulling the loose side of the drive cage away from the Thelio-IO board, move the board back and out of the drive cage.
5. Place the new Thelio-IO board into the drive cage and replace the screws and wiring.

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
2. Ensure the system is plugged into power, and the power supply switch is in the 1 (On) position.
3. Push the small button labeled `B0` on the top Thelio-IO board.

![Internal power button](./img/b0-button.jpg)

4. If the Thelio-IO `B0` button powers the machine on, then the issue is either the front power button or its connection to the Thelio-IO board. [Check the front power button wiring](#steps-to-check-the-front-power-button-wiring).
5. If the Thelio-IO `B0` button does not work, press the `Power` button in the top right of the motherboard.

![Motherboard power button](./img/motherboard-power-button.jpg)

6. If the motherboard `Power` button works, but the Thelio-IO `B0` button does not work, then the issue is either the Thelio-IO board or its connection to the motherboard. [Check the wiring between the Thelio-IO board and the motherboard](#steps-to-check-the-front-power-button-wiring).
    - The second Thelio-IO board's power ports can be used if the first board becomes defective.
7. If the motherboard `Power` button does not work, then the issue may be the motherboard, or it may be the power supply or its connection to the motherboard. Ensure all connections are plugged in properly and that the power supply is switched to the 1 (On) position.

### Steps to check the front power button wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right.

![Power button receptacle](./img/power-button-receptacle.jpg)

4. The front power button receptacle should plug into the `PFPD` port on the top Thelio-IO board, with the red wire on the bottom and the black wire on the top.

![Power button wiring on Thelio-IO board](./img/power-wiring-thelio-io.jpg)

5. The `PMBD` port on the Thelio-IO board should connect to an adapter:
    - The red wire on the four-port connector should be on the bottom on the Thelio-IO board.
    - The other side of the cable connects to the adapter, with the red wire on the top left, the blue pair immediately following the red pair, and a black wire on the right.

![Power button wiring adapter](./img/power-wiring-adapter.webp)

6. The adapter should connect to the `F-PANEL` (front panel) input on the motherboard.

![Power button wiring on motherboard](./img/power-wiring-motherboard.jpg)

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.

## Troubleshooting the Thelio-IO USB connection:

The Thelio-IO boards connect to the motherboard's USB headers for firmware updates and fan control within the host OS. If the fans seem to be stuck on full blast, check the Thelio-IO USB connections.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to check the USB wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. Two of the Thelio-IO boards have `USB0` ports. The port on each board connects to a cable (labeled `USB`) with the red wire on the bottom.

![USB wiring on Thelio-IO board](./img/thelio-io-usb.jpg)

3. The two internal USB cables plug into the motherboard's USB headers.

![USB input on motherboard](./img/motherboard-thelio-io-usb.jpg)
