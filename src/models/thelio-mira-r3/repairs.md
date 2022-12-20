# Thelio Mira (Parts & Repairs)

Many components in your Thelio Mira can be upgraded or replaced as necessary. This page uses photos of the initial revision for this generation (R3-0). Minor case details may vary on newer units, but screw counts, general component locations, and other details should remain the same unless otherwise noted.

Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Replacing the front accent strip](#replacing-the-front-accent-strip)
- [Removing the top case](#removing-the-top-case)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Replacing the bottom case fan](#replacing-the-bottom-case-fan)
- [Replacing the GPU](#replacing-the-gpu)
- [Removing the CPU shroud](#removing-the-cpu-shroud)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the power supply](#replacing-the-power-supply)
- [Replacing the Thelio-IO board](#replacing-the-thelio-io-board)
- [Troubleshooting the power button](#troubleshooting-the-power-button)

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

## Adding/removing 2.5" storage drives:

Thelio B4 supports up to four 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two screws securing the drive bay's cover, highlighted green below.

![2.5" drive cover and 2.5" drive screws](./img/25-slot-cover.webp)

3. If you are adding a new drive, pop out a black plastic ring on the top crossbar and slide out four screws (per drive).

![2.5" drive cover and 2.5" drive screws](./img/25-drive-screws.webp)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots leading to the Thelio-IO board.

![2.5" drive installation](./img/25-drive-installation.webp)  

![Installed 2.5" drive](./img/25-drive-installed.webp)  

_Thelio Mira R3 with one 2.5" drive installed._

6. Replace the black plastic screw rings and the 2.5" drive bay cover.

## Replacing the bottom case fan:

Thelio B4 has one case-mounted intake fan on the bottom of the chassis.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the bottom case fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unplug the fan's cable from the Thelio-IO daughterboard.
    - The bottom case fan plugs into the `INTAKE0` port on the Thelio-IO board.
    - When viewed from the front of the case, this connector is second from the top.

![Bottom case fan connector](./img/bottom-fan-connector.webp)

3. Unscrew the four fan screws from the bottom of the machine.
    - To avoid damaging other components, place the machine on its front side when working with the bottom surface.

![Bottom case fan screws](./img/bottom-fan-screws.webp)

4. Remove the old fan from the case.
5. When installing the fan, mount the components in the following order:
    - Chassis
    - Dust filter
    - Acrylic spacer
    - Fan
6. The new fan's cable should be oriented towards the front-right corner of the case.
    - The cable runs along the inner corner of the case, and does not pass through any of the cable management holes or velcro strips.

## Replacing the GPU:

Thelio supports one dual-slot dedicated GPU. The GPU slot is a PCIe 5.0 x16 slot.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two back screws holding the PCIe bracket in place, and remove the PCIe bracket.

![PCIe bracket screws](./img/pcie-bracket.webp)

3. Unscrew the four screws holding the side GPU brace in place. Remove the brace.

![GPU brace screws](./img/gpu-brace-screws.webp)

4. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/gpu-power.webp)

5. Push and hold the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.

![PCIe slot & latch](./img/gpu-slots.webp)

7. After inserting the new GPU into its slot, connect the power cable.
8. Once the GPU is installed, replace the side GPU brace, back PCIe bracket, and top case.
    - The side GPU brace includes screws to adjust for the height and depth of the graphics cards.

![GPU brace screws](./img/gpu-brace-adjustment-screws.webp)

_The GPU brace's primary function is to prevent damage during shipping. The system can be run without the brace if it doesn't fit an upgraded card; the back PCIe bracket provides primary support for the GPU._

## Removing the CPU shroud:

The CPU shroud guides airflow through the CPU cooler. It covers the CPU and partially obstructs the RAM slots and top GPU.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU shroud:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace](#replacing-the-gpu).
    - The GPU can also be removed to provide more room for working with the components.
2. Unplug the connectors for the CPU fans from the splitter board on the top crossbar.
    - The splitter board provides the same signal to both ports, so it doesn't matter which fan is plugged into which port.

![CPU fan connectors](./img/cpu-fan-connectors.webp)

3. Unscrew the four back screws holding the CPU shroud in place.

![CPU shroud screws](./img/cpu-shroud-screws.webp)

4. Pull the CPU shroud away from the machine.

## Replacing the RAM:

Thelio B4 supports up to 64GB (2x32GB) of RAM. The RAM sticks are DDR5 DIMMs (non-ECC) running at a speed of up to 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU shroud](#removing-the-cpu-shroud).
    - Removing the CPU shroud is optional, but is recommended to provide easier access to the leftmost RAM slot.
2. To remove an existing RAM stick, flip the top and bottom latches away from the stick, then pull the stick out of the slot.

![RAM slots](./img/ram-slots.webp)

3. Make sure the tabs on the top and bottom of the slot are open (pulled away from the slot), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on top.
    - Use the following guide for placement of the RAM sticks:
    ![RAM slot order](./img/ram-order.webp)
4. Replace the top case.

## Replacing the M.2 drives:

Thelio B4 has three M.2 slots (M key), supporting M.2 size 2280.

- Slot 1 supports PCIe NVMe Gen 5.
- Slots 2, 3, and 4 support PCIe NVMe Gen 4.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drive (slot 3):

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew and remove the M.2 heatsink.
    - Slot 1 is located underneath the single-height heatsink; slots 2, 3, and 4 are located underneath the triple-height heatsink.
    - The heatsink screws are held captive, and will not fully come out of the heatsink.
    - It may take some pressure to remove the heatsink and thermal tape from the M.2 drive. After unscrewing the heatsink, pull slowly to avoid breaking the thermal tape.

![M.2 heatsink screws](./img/m2-heatsink-screws.webp)

3. For the M.2 drive(s) being removed, push the rectangular side of the retaining clip to flip it open.

![M.2 slots](./img/m2-slots.webp)

4. Remove the existing M.2 drive by pulling it out of the slot.
5. Insert the new M.2 drive into the slot and hold it in place.
6. Flip the retaining clip back into place and push the curcular side until it snaps closed.
7. Replace the M.2 heatsink, CPU shroud, GPU, GPU brace, and top case.
    - If you are populating an SSD slot for the first time, remove any protective plastic that may be covering the thermal tape.
    - When installing the Slot 1 heatsink, fit the tab on the opposite end from the screw into the motherboard standoff before lining up the screw.

![M.2 thermal tape](./img/m2-thermal-tape.webp)

## Replacing the CPU fans:

Thelio Mira R3 contains two CPU fans. One is mounted on the CPU shroud, and one is mounted on the cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the shroud-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the GPU brace](#replacing-the-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. Free the fan cable from the velcro loop, highlighted cyan below.

![CPU shroud fan bracket screws](./img/cpu-shroud-fan-bracket-screws.webp)

3. Unscrew the four screws (two on each side) holding the fan bracket onto the shroud.
    - Removing the bracket from the shroud is not required to remove the fan, but it makes installing the fan much easier.
4. Unscrew the four screws attaching the bracket to the fan.

![CPU shroud fan screws](./img/cpu-shroud-fan-screws.webp)

5. When reinstalling the fan into the CPU shroud, the spinning side should face inward (towards the front of the case), and the cable should point towards the closed corner of the top side of the shroud (the top-right corner, when viewed from the back.)
    - Overtightening the fan bracket's screws may cause fan noise; if the fan is creating excessive noise, try slightly loosening some of the screws.

### Steps to replace the cooler-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the GPU brace](#replacing-the-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. Pull the corners of the fan's top clip away from the heatsink it's held to.
    - Alternatively, the opposite side of the bracket (clipped onto the heatsink) can be released first.

![CPU cooler fan top clip](./img/cpu-cooler-fan-clip.webp)

3. Repeat the process for the bottom clip, then pull the fan and clips away from the CPU cooler.
4. Unplug the fan connector and free the cable through the six velcro straps.

![CPU fan cabling](./img/cpu-fan-cabling.webp)

5. When reinstalling the CPU cooler fan, the side with a stationary cover should face the back of the case, while the spinning side should face the CPU cooler.
    - The cable should point towards the top inner corner (top-left when viewed from the back of the case.)

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler.

The CPU uses an Intel LGA 1700 socket. The CPU cooler is a Noctua NH-U9S.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 45 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the GPU brace and GPU](#replacing-the-gpu), [remove the CPU shroud](#removing-the-cpu-shroud), and [remove the cooler-mounted CPU fan](#steps-to-replace-the-cooler-mounted-cpu-fan).
2. While holding the CPU cooler in place so it doesn't fall, unscrew the two screws holding the CPU cooler crossbar onto the vertical mounting brackets.
    - The screws are held captive, and will not fully come out of the crossbar.
    - Only the two outer screws need to be removed; the center screw holding the horizontal crossbar onto the heatsink does not need to be removed.

![CPU cooler screws](./img/cpu-cooler-screws.webp)

3. The cooler will come away from the CPU.
4. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

### Steps to replace the CPU:

1. Place the computer on its side so the motherboard is facing up.
2. Unscrew and remove the cooler mounting bracket on the right side of the CPU.

![CPU cooler mounting bracket](./img/cpu-cooler-mounting-bracket.webp)

3. Push the locking pin outward until it's able to spring away from the motherboard.
    - Caution: the locking pin may spring up with significant force when freed.

![CPU locking pin](./img/cpu-locking-pin.webp)

3. Flip the CPU holder away from the CPU.
    - The CPU holder opens in the opposite direction from the locking pin.

![CPU holder raised](./img/cpu-holder-raised.webp)

4. Carefully lift the CPU out of the CPU socket.
    - Be careful not to bend any of the gold pins on the CPU socket, and do not touch the gold pads on the CPU.

![CPU (removed)](./img/cpu-removed.webp)

5. Gently place the new CPU into the socket.
    - When reinstalling the CPU, be sure to match the original orientation, with the triangle on the CPU pointing to the bottom left of the motherboard.
    - The triangle on the CPU should match the triangle on the top of the CPU cover.
6. Flip the CPU cover back onto the CPU and push the locking pin down into place.

### Steps to install the thermal paste/CPU cooler:

1. Draw an `X` shape of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste-application.webp)

2. Place the CPU cooler onto the CPU; while holding it in place, screw each end of the cooler crossbar onto one of the mounting brackets.
    - The cooler should be oriented so the hole in the vertical center of the heatsink is facing the right side (front of the case).
    - Insert each screw partially first, then fully tighten both.
3. Set the computer upright, then reinstall the cooler-mounted CPU fan, CPU shroud, GPU bracket, and top case.

## Replacing the power supply:

The power supply unit (PSU) is modular and can be replaced with another unit of the same model. Different models may not be compatible with the cabling pre-installed in the Thelio.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace and bottom GPU](#replacing-the-gpu).
2. Unplug all of the modular cabling from the back of the PSU.
    - Some of the cables may be easier to unplug after the PSU has been unscrewed/removed from the case.

![PSU cabling](./img/psu-cables.webp)

3. Unscrew the four screws holding the PSU in from the back of the case.

![PSU back screws](./img/psu-screws.webp)

4. Remove/replace the PSU.
    - Set the replacement PSU on top of the rubber post that holds it at the correct height. 
    - The replacement PSU should be installed with the fan facing the bottom of the case.

![PSU post](./img/psu-post.webp)

5. After screwing in the replacement PSU, use the labels and pin counts on the cables and ports to ensure the power cables are reconnected in the proper locations.
    - Remember that not all of the available connectors will plug into the PSU-- the 8-pin (6 + 1) connector is to be plugged into the GPU.
6. If the replacement PSU has an "ECO Mode" switch, make sure it is switched on for an optimal fan curve.

## Replacing the Thelio-IO board:

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

The Thelio-IO board handles the front power button, fan control, and 2.5" SATA connectors for the system. If the Thelio-IO board becomes defective, it can be replaced using the instructions below.

## Steps to replace the Thelio-IO board:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the 2.5" drive cage cover and any 2.5" drives that are installed](#addingremoving-25-storage-drives).
2. Use the cutouts on the front right corner of the chassis to unplug all cabling from the Thelio-IO board.
    - The rightmost connector requires pulling the white tab while unplugging.

![Thelio-IO cabling cutouts](./img/thelio-io-cabling-cutouts.webp)

3. Unscrew the two screws on the top side of the drive cage.

![Thelio-IO drive cage screws](./img/thelio-io-screws.webp)

4. While pulling the loose side of the drive cage away from the Thelio-IO board, move the board back and out of the drive cage.
5. Place the new Thelio-IO board into the drive cage and replace the screws and wiring.

## Thelio-IO wiring guide:

![Thelio-IO wiring guide](./img/thelio-io-wiring.webp)

1. When wiring the Thelio-IO board, refer to the above image and the following guide. The ports are numbered in the suggested connection order based on position and size.
    - **1:** `POWER0` - to the power supply `PERIF` port (via 4-pin Molex adapter.)
    - **2:** `INTAKE0` - to the [bottom case fan](#replacing-the-bottom-case-fan).
    - **3:** `CPUOUT0` - to the splitter board (on the top crossbar) connecting to both [CPU fans](#replacing-the-cpu-fans).
    - **4:** `CPUIN0` - to the `CPU_FAN` header at the top of the motherboard.
    ![CPU fan header on motherboard](./img/motherboard-cpu-fan-header.webp)
    - **5:** `DATA0/1/2/3` - to SATA ports #1/#2/#3/#4 on the motherboard, highlighted yellow below.
        - The ports are located next to the top GPU slot.
        - These connectors provide data transfer for the 2.5" drive slots.
    ![SATA connectors on motherboard](./img/motherboard-sata-headers.webp)
    - **6\*:** `PFP0` - to the [power button receptacle](#troubleshooting-the-power-button) on the front panel.
    - **7\*:** `USB0` - to the `JUSB1` header on motherboard, highlighted red below.
    ![USB connector on the motherboard](./img/motherboard-usb-header.webp)
        - The `F_USB1` port is located above the four SATA ports.
        - On the Thelio-IO board, the row of four pins plugs in, while the row of five pins hangs off the back and does not plug in.
        - This connector provides fan control and firmware updates.
    - **8\*:** `PMB0` - to the `+PLED-` and `+PW-` pins (the four top-left pins of the `F_PANEL` header) on the motherboard.
        - On the motherboard, the red wire goes on the middle-left and the black wire goes on the middle-right.
        - The `F_PANEL` header is at the bottom right of the motherboard.
    ![Power LED & power switch headers on motherboard](./img/motherboard-power-sw-led-headers.webp)
    - **\*** For all connectors with multi-colored wires plugging into the Thelio-IO board, the red wire goes on the right side (viewing from the front of the computer.)

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

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Ensure the system is plugged into power, and the power supply switch is in the 1 (On) position.
3. Push the small button labeled `B0` on the Thelio-IO board.

![Internal power button](./img/b0-button.webp)

4. If the Thelio-IO `B0` button powers the machine on, then the issue is either the front power button or its connection to the Thelio-IO board. [Check the front power button wiring](#steps-to-check-the-front-power-button-wiring).
5. If the Thelio-IO `B0` button does not work, then the issue is either the Thelio-IO board or its connection to the motherboard. [Check the wiring between the Thelio-IO board and the motherboard](#thelio-io-wiring-guide).

### Steps to check the front power button wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right (when viewed from the back of the computer.)

![Power button receptacle](./img/power-button-receptacle.webp)

4. The front power button receptacle should plug into the `PFPD` port on the Thelio-IO board, with the red wire on the top (see the [Thelio-IO wiring guide](#thelio-io-wiring-guide).)

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.
