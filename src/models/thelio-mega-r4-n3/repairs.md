# Thelio Mega (Parts & Repairs)

Many components in your Thelio Mega can be upgraded or replaced as necessary. This page uses photos of the the B4-N3 revision, which indicates:

- **R4:** The fourth AMD motherboard used in Thelio Mira.
- **N3:** Based on the third revision of the nebula49 chassis.

Minor case details may vary based on the production date of the unit, but screw counts, general component locations, and other details should remain the same unless otherwise noted.

Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Replacing the front accent strip](#replacing-the-front-accent-strip)
- [Removing the top case](#removing-the-top-case)
- [Removing the inner partition](#removing-the-inner-partition)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Replacing the case fans](#replacing-the-case-fans)
- [Replacing a GPU](#replacing-a-gpu)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Removing the CPU duct](#removing-the-cpu-duct)
- [Replacing the RAM](#replacing-the-ram)
- [Removing the top crossbar](#removing-the-top-crossbar)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the power supply](#replacing-the-power-supply)
- [Replacing the side fans](#replacing-the-side-fans)
- [Replacing the Thelio-IO boards](#replacing-the-thelio-io-boards)
- [Troubleshooting the power button](#troubleshooting-the-power-button)
- [Troubleshooting the Thelio-IO USB connection](#troubleshooting-the-thelio-io-usb-connection)

## Replacing the front accent strip:

Thelio Mira includes a customizable accent panel on the front of the case, which can be swapped to change the case's look and feel. The instructions for swapping the accent are also available in [video form](https://system76.com/r/diyaccentpanel).

**Tools required:** None  
**Time estimate:** 30 seconds  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the front accent strip:

1. Place the Thelio on the edge of the desk so the front side is hanging off of the desk.
    - The Thelio can alternatively be lifted or tilted so the front of the computer is hovering above the desk.
2. Slide the accent strip down to unlock it.
    - The accent can be gripped at the bottom edge.
3. Pull the accent strip off of the case, starting with the bottom edge.
4. Place the new accent strip onto the front of the case and slide it up to lock it into place.
    - Due to manufacturing tolerances, the accent strip may not sit flush with the top case when fully installed.

![Front accent strip removal](./img/accent-strip-removal.webp)

## Removing the top case:

The top case can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top case:

1. Remove the eight outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.webp)

2. Slide the top case up and off of the machine.

## Removing the side fan mount:

The side fan mount holds the two 140mm side intake fans, which cool the GPU(s) and 2.5" storage drives.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the side fan mount:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unplug the side fan connector from the top of the side fan mount, next to the back of the chassis.

![Side fan connector](./img/side-fan-connector.webp)

3. Unscrew the four screws holding the side fan mount in place (two on the front of the case, two on the back).

![Side fan mount screws](./img/side-fan-mount-screws.webp)

4. Pull the side fan mount out of the chassis.

## Replacing the side intake fans:

The 140mm side intake fans can be independently replaced.

**Part numbers:**
- Each side fan is a 140mm Be Quiet! Silent Wings 4 (model number `BQ SIW4-14025-MF-PWM`).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the side intake fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
2. Unscrew the four screws holding the fan in place.

![Side fan screws](./img/side-fan-screws.webp)

3. Free the fan cable from the velcro straps and unplug it from the splitter board.

![Side fan cabling](./img/side-fan-cabling.webp)

4. When installing the new fan, orient the spinning side out of the chassis and the stationary side into the chassis.

## Adding/removing 2.5" storage drives:

Thelio Mira B4-N3 supports up to four 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
2. Unscrew the two screws securing the drive bay's cover.

![2.5" drive bay covers](./img/25-bay-covers.webp)

3. If you are adding a new drive, pop out the black plastic ring on the top crossbar and slide out four screws (per drive).

![2.5" drive screws](./img/25-drive-screws.webp)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots leading to the drive bay's Thelio-IO board.

![2.5" drive installation](./img/25-drive-installation.webp)  

![Installed 2.5" drive](./img/25-drive-installed.webp)

6. Replace the black plastic screw ring and the 2.5" drive bay cover.

## Removing the GPU brace:

The GPU brace provides mounting points for GPU fingers, which can optionally support graphics cards or other PCI Express devices. GPU fingers are primarily intended to avoid shipping damage, and the system can be run without GPU fingers if they don't fit an upgraded GPU.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the GPU brace:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
2. Remove the four screws holding the GPU brace in place (two at the top attached to the CPU duct, and two at the bottom attached to the PSU chamber).
    - As visible in the photo below, the elongated screw holes allow the GPU brace to be slightly rotated, which can allow the GPU finger(s) to better support the exact position of the GPU.

![GPU brace screws](./img/gpu-brace-screws.webp)

3. Pull the GPU brace out of the chassis.

### Steps to adjust the GPU fingers:

1. Unscrew the four screws (two on each side) holding the GPU finger onto the GPU brace, highlighted cyan below.

![GPU finger screws](./img/gpu-finger-screws.webp)

2. Move the GPU finger to the desired position, then re-attach the screws.
3. Repeat for any additional GPU fingers present.
4. To adjust the depth the GPU brace extends into the chassis, loosen the screws highlighted yellow above, then tighten them when the GPU brace is in the desired position.

## Removing the CPU duct:

The CPU duct guides airflow through the CPU cooler. It covers the CPU and RAM slots on the motherboard.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU duct:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), and [remove the GPU brace](#removing-the-gpu-brace).
2. Unscrew the four back screws holding the CPU duct in place.

![CPU duct screws](./img/cpu-duct-screws-back.webp)

3. Unplug the braided cables for the two CPU duct-mounted fans, highlighted light blue below.
    - The non-braided Y-cable does not need to be unplugged at this stage.

![Top exhaust fans](./img/cpu-duct-screws-connectors-top.webp)

4. While holding the CPU duct up, unscrew the two top screws connecting it to the top crossbar, highlighted green above.
5. Pull the CPU duct out of the machine.

## Replacing a GPU:

Thelio Mega R4-N3 contains four PCI Express 5.0 x16 slots. Factory configurations are offered with up to three GPUs. Four GPUs may function, depending on space and power constraints.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace a GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), and [remove the GPU brace](#removing-the-gpu-brace).
2. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/gpu-power.webp)

3. Loosen the two back screws holding the PCIe bracket in place, then slide the PCIe bracket open.
    - You can optionally remove the screws and PCIe bracket instead.

![PCIe bracket screws](./img/pcie-bracket.webp)

4. Hold the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.
    - If it's difficult to reach the latch, you can use a long screwdriver to push the latch; you may also need to [remove the CPU duct](#removing-the-cpu-duct) and the [bottom RAM stick](#replacing-the-ram) (or any surrounding GPUs) to make more room to reach the latch.

![GPU order & PCIe latches](./img/pcie-slots.webp)

5. When installing new GPUs, utilize the top slot first. Other slots can be utilized in the order that best fits the GPUs, since they all run at equal bandwidth.
6. After inserting the new GPU into its slot, connect the power cables.
    - The maximum number of power cables are preinstalled in your system, but some may be tied back using velcro if the system shipped with less than four GPUs. - you may need to ...
7. Once all GPUs are installed, replace the back PCIe bracket, CPU duct, GPU brace, side fan mount, and top case.

## Replacing the M.2 drives:

Thelio Mega R4-N3 has four M.2 slots, which all support PCIe NVMe Gen 5 x4.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 23 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the GPU brace and GPUs](#replacing-a-gpu).
2. Remove the M.2 heatsink by rotating the latch clockwise, then holding the latch down while pivoting the heatsink away from the latch.
    - It may take some pressure to break the seal of the thermal tape; pull slowly to avoid breaking the thermal tape.

![M.2 heatsink screws](./img/m2-heatsink.webp)

3. To remove an M.2 drive, rotate the latch, pull the end of the M.2 drive slightly away from the thermal tape on the motherboard, then pull the drive out of the slot.
    - The drive may lift away from the motherboard on its own if the thermal tape is not present.
    - Thermal tape is not present behind Slot D.

![M.2 slot screws](./img/m2-slots.webp)

4.  If utilizing a slot for the first time, peel the plastic covering off of the thermal tape behind the slot, and off of the thermal tape in the corresponding position on the heatsink.
    - Thermal tape is not present behind Slot D.
    - In the below photos, Slots C and D have thermal tape that's ready to use, while Slots A and B still have the plastic coverings applied.

![M.2 thermal tape (motherboard)](./img/m2-thermal-tape-motherboard.webp)
![M.2 thermal tape (heatsink)](./img/m2-thermal-tape-heatsink.webp)

5. To install an M.2 drive, insert its keyed end into the slot, then press the opposite end down onto the latch until it clicks into place.
    - If the latch does not rotate on its own when the drive is pressed down, rotate it manually to allow the drive to be seated underneath it.
6. Replace the M.2 heatsink, GPU(s), CPU duct, GPU brace, side fan mount, and top case.

## Replacing the CPU fans:

Thelio Mega R4-N3 contains four CPU fans: two mounted in the CPU duct, and two mounted on the CPU cooler heatsink.

**Part numbers:**
- CPU duct fans: 2x Be Quiet! Silent Wings 4 (`BQ SIW4-12025-MF-PWM`)
- CPU cooler heatsink fans: 2x Arctic Freezer 4U fans
    - Included with the Arctic Freezer 4U-M CPU cooler

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the duct-mounted CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the CPU duct](#removing-the-cpu-duct).
2. Free the cables from the velcro strap on the top of the CPU duct.

![CPU duct velcro strap](./img/cpu-duct-cable-strap.webp)

3. To remove the side CPU duct fan, unscrew the four fan screws from the outside of the CPU duct.
    - When reinstalling the fan, the spinning side faces outward, and the cable goes on the corner closest to the velcro strap.

![CPU duct side fan screws](./img/cpu-duct-side-fan-screws.webp)

4. To remove the back CPU duct fan, unscrew the four screws holding the fan bracket into the duct (two on the top, and two on the bottom).

![CPU duct inner screws](./img/cpu-duct-back-bracket-screws.webp)

5. Push the fan bracket slightly into the duct, then pull it out the side of the duct.
6. Unscrew the four fan screws from the fan bracket to remove the fan.
    - When reinstalling the fan, the spinning side should face into the CPU duct, with the bracket's cable cutout closest to the velcro strap.

![CPU duct back fan screws](./img/cpu-duct-back-fan-screws.webp)

### Steps to replace the cooler-mounted CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the CPU duct](#removing-the-cpu-duct).
2. Disconnect the rear cooler fan from the front cooler fan's Y-cable, and unplug the front cooler fan's Y-cable from the splitter board.
    - The heatsink fan cable connection points are highlighted red below.
    - In the below photo, the top crossbar has been removed for better visibility.

![CPU heatsink fans & connectors](./img/cpu-heatsink-fans-installed.webp)

3. Pull the fans (highlighted green above) directly out of the case, sliding them off the heatsink.

![CPU heatsink fans (removed)](./img/cpu-heatsink-fans-removed.webp)

4. When reinstalling the CPU heatsink fans, the fan with a normal cable goes on the back of the heatsink, while the fan with a Y-cable goes on the front.

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler. The thermal paste should generally also be replaced whenever the CPU cooler is removed from the CPU for any reason.

**Part numbers:**
- CPU cooler: Arctic Freezer 4U-M

**Tools required:** Cross-head (Phillips) screwdriver (long), torx screwdriver, thermal paste  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), [remove the CPU duct](#removing-the-cpu-duct), and [remove the heatsink-mounted CPU fans](#steps-to-replace-the-cooler-mounted-cpu-fans).
2. While holding the cooler in place so it doesn't fall, loosen the four CPU cooler screws.
    - The screws are held captive and will not fully detatch from the cooler.
    - (move me) The outer screws go on the left side, while the inner screws go on the right side.

![CPU cooler screws](./img/cpu-cooler-screws.webp)

4. The cooler will come away from the CPU.
5. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU.
    - Due to the design of the heatsink, some thermal paste may remain between the heatsink pipes. Only the flat section of the pipes that makes contact with the CPU needs to be cleaned.
    - You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![CPU thermal paste removal](./img/cpu-thermal-paste-removal.webp)

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

4. Reinstall the cooler-mounted CPU fan, top crossbar, CPU duct, GPUs, GPU bracket, inner partition, and top case.

## Replacing the RAM:

Thelio Mega r1.0 supports up to 256GB (8x32GB) of RAM. The RAM sticks are Unregistered/Unbuffered ECC DDR4 DIMMs running at a speed of 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU duct](#removing-the-cpu-duct).
    - [Removing the CPU cooler]() is optional, but provides easier access to the innermost RAM slots.
2. To remove an existing RAM stick, flip the bottom latch down away from the stick, then pull the stick out of the slot, starting from the bottom edge. (The top of the RAM slot does not move.)

![RAM slots](./img/ram-slots.jpg)

_The CPU cooler has been removed for better visibility in the above photo; removing the CPU cooler is not required to access all eight of the RAM slots._

3. Make sure the tabs on the left and right of the slot are open (pulled outwards), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on the right side.
    - Use the following guide for placement of the RAM sticks:

![RAM slot order](./img/ram-order.webp)

4. Replace the CPU duct, GPU brace, inner partition, and top case.

## Replacing the power supply:

The power supply unit (PSU) is modular and can be replaced with another unit of the same model. Different models may not be compatible with the cabling pre-installed in the Thelio Mega.

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

Thelio Mega r1.0 has two intake fans mounted on the inner partition. The fans can be replaced if they become defective/noisy.

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

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU duct](#removing-the-cpu-duct).
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

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the inner partition](#removing-the-inner-partition), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU duct](#removing-the-cpu-duct).
2. Two of the Thelio-IO boards have `USB0` ports. The port on each board connects to a cable (labeled `USB`) with the red wire on the bottom.

![USB wiring on Thelio-IO board](./img/thelio-io-usb.jpg)

3. The two internal USB cables plug into the motherboard's USB headers.

![USB input on motherboard](./img/motherboard-thelio-io-usb.jpg)
