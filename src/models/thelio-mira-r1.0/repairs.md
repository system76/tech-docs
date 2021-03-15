# Thelio Mira (Parts & Repairs)

Many components in your Thelio Mira can be upgraded or replaced as necessary. Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the top case](#removing-the-top-case)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Replacing a GPU](#replacing-a-gpu)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Removing the CPU shroud](#removing-the-cpu-shroud)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the power supply](#replacing-the-power-supply)
- [Replacing the bottom case fan](#replacing-the-bottom-case-fan)
- [Replacing the Thelio-IO board](#replacing-the-thelio-io-board)
- [Troubleshooting the power button](#troubleshooting-the-power-button)
- [Troubleshooting the Thelio-IO USB connection](#troubleshooting-the-thelio-io-usb-connection)

## Removing the top case:

The top case can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top case:

1. Remove the eight outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.jpg)

2. Slide the top case up and off of the machine.

![Top case removal](./img/top-case-removal.jpg)

## Adding/removing 2.5" storage drives:

Thelio Mira r1.0 supports up to four 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. If you are adding a new drive, pop out the black plastic ring on the top crossbar and remove four screws (per drive).

![Storage drive screws](./img/drive-screw-removal.jpg)

3. Insert four screws into each 2.5" storage drive you wish to install.

![Drive with screws installed](./img/drive-with-screws.jpg)

4. Unscrew the two screws securing the drive bay's top cover.

![Drive bay cover](./img/drive-bay-cover.jpg)

5. Slide each 2.5" drive into one of the slots leading to the Thelio-IO board.

![2.5" drive installation](./img/drive-installation.jpg)

## Replacing a GPU:

Depending on which power supply is installed, Thelio Mira supports up to two 3-slot thick GPUs. There are three PCIe 4.0 x16 slots; however, the bottom slot only has room for a 1-slot thick card, and is only accessible if the second slot does not have a 3-slot thick card installed. The top two slots can accommodate cards as wide as 3-slots. An even thicker GPU can be installed in the top slot if only a single GPU is being used. Mixing NVIDIA and AMD GPUs is not recommended.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace a GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two back screws holding the PCIe bracket in place, then slide the PCIe bracket open.

![PCIe bracket screws](./img/pci-retainer-missing-slot.jpg)

3. Unscrew the four screws holding the side GPU brace in place and remove the brace.

![GPU brace removal](./img/gpu-brace-removal.jpg)
![GPU brace](./img/gpu-brace.jpg)

4. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/GPU-power-connectors.jpg)

5. Hold the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.
    - If removing a GPU in the bottom slot, it may be necessary to remove the GPU in the top slot first in order to reach the bottom slot's latch.
    - If space is tight, a long object such as a screwdriver can be used to press the latch.

![PCIe slot latch](./img/pcie-latch.jpg)

6. After inserting the new GPU into its slot, connect the power cables.
    - If you are using only one GPU, it should go in the top PCIe slot.
    - If your Mira was originally equipped with fewer than 2 GPUs, power cables for two GPUs will still be preinstalled in your system. If they were not being used, they will be bundled up using velcro cable keepers to keep them out of the way.
7. Once all GPUs are installed, replace the GPU brace, back PCIe bracket, any PCI slot covers for empty slots, and finally the top case.
    - The GPU brace includes plastic pieces which are adjusted to the GPUs that originally shipped with the system. The brace is highly adjustable and should be able to accommodate many different GPU shapes and sizes. 

_The GPU brace's primary function is to prevent damage during shipping. The system can be run without the brace if it doesn't fit an upgraded card; the back PCIe bracket provides primary support for the GPUs._

## Replacing the M.2 drives:

Thelio Mira has two M.2 slots, which support PCIe NVMe Gen 4 x4, PCIe NVMe Gen 3 x4, or SATA III. Both slots support drive sizes 22110, 2280, 2260, and 2242.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 23 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace and GPUs](#replacing-a-gpu).
2. Remove the two screws securing the M.2 fan cover and remove the fan cover.

![M.2 fan cover screws](./img/m2-fan-cover-screws.jpg)

3. Remove the two screws securing the heatsink covering the slot you wish to access and remove the heatsink.

![M.2 heatsink screws](./img/m2-heatsink-screws.jpg)

_If there is already a drive in the slot you are accessing, it may take some pressure to remove the heatsink and thermal tape from the M.2 drive. Pull slowly to avoid breaking the thermal tape._

4. Unscrew the retainer screw opposite the M.2 slot.

![M.2 drive screws](./img/m2-drive-screws.jpg)

5. Remove the existing M.2 drive by pulling it out of the slot.
6. Insert the new M.2 drive into the slot and hold it in place.
7. Replace the retainer screw.
8. If utilizing a slot for the first time, peel the plastic backing off of the heatsink to expose the double-sided thermal tape for that slot.

![M.2 thermal tape](./img/m2-thermal-tape.jpg)

9. Replace the M.2 heatsinks, M.2 fan cover, GPUs, GPU brace, and top case.

## Replacing the RAM:

Thelio Mega r1.0 supports up to 128GB (4x32GB) of RAM. The RAM sticks are Unregistered/Unbuffered ECC DDR4 DIMMs running at a speed of 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case).

![RAM slots](./img/ram-slots.jpg)

_The CPU shroud has been removed for better visibility in the above photo; removing the CPU shroud is not required to access the RAM slots._

2. To remove an existing RAM stick, flip the top latch up away from the stick, then pull the stick out of the slot, starting from the top edge. (The bottom of the RAM slot does not move.)

![RAM latches](./img/ram-latches.jpg)

3. Make sure the latch on the top of the slot is open (pulled upwards), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on top.
    - Use the following guide for placement of the RAM sticks:

![RAM slot order](./img/ram-order.png)

4. Replace the top case.

## Removing the CPU shroud:

The CPU shroud guides airflow through the CPU cooler.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU shroud:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace](#replacing-a-gpu).
2. Unplug the connectors for the CPU shroud-mounted fan. Both can be unplugged if it is difficult to tell which plug is for which fan (just remember to plug both back in when reassembling).

![CPU fan connectors](./img/cpu-fan-connectors.jpg)

3. Unscrew the four back screws holding the CPU shroud in place.

![CPU shroud screws](./img/cpu-shroud-screws.jpg)

4. Pull the CPU shroud away from the machine.

## Replacing the CPU fans:

Thelio Mira contains two CPU fans. One is mounted on the CPU shroud, and one is mounted on the cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the shroud-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. To remove the CPU shroud fan, unscrew the four fan screws inside the shroud.

![CPU shroud fan screws](./img/cpu-shroud-fan-screws.jpg)

3. Free the cable from the cable keeper, then remove the fan.

### Steps to replace the cooler-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the GPU brace](#replacing-a-gpu), and [remove the CPU shroud](#removing-the-cpu-shroud).
2. Pull the center loop of the fan clip to remove it from the CPU cooler.

![CPU cooler fan clip](./img/cpu-cooler-fan-clips.jpg)

3. Repeat the process for the bottom clip, then remove the fan from the CPU cooler.
4. Unplug the fan from the CPU fan power board (if it wasn't already unplugged when the CPU shroud was removed).
5. When reinstalling the CPU fans, both fans should be oriented so the side with the non-spinning cover faces the back of the machine, while the spinning side faces the front of the machine.

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler.

The CPU uses an AMD AM4 socket.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the GPU brace and GPUs](#replacing-a-gpu), [remove the CPU shroud](#removing-the-cpu-shroud), and [remove the cooler-mounted CPU fan](#steps-to-replace-the-cooler-mounted-cpu-fan).
2. While holding the CPU cooler in place so it doesn't fall, unscrew the two CPU cooler mounting screws. The cooler brackets are under spring tension, so it's best to loosen each side a little at a time.

![CPU cooler screws](./img/cpu-cooler-screws.jpg)

3. The cooler will come away from the CPU.
5. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Cleaning thermal paste](./img/thermal-paste-clean.jpg)

### Steps to replace the CPU:

1. Flip the CPU locking lever up to unlock the CPU socket.

![Unlocking CPU socket](./img/cpu-socket-unlock.jpg)

2. Carefully lift the CPU straight out of the socket. 
   - **Caution:** The CPU has hundreds of tiny, delicate pins on the bottom side, so be very careful not to bend any of them while uninstalling, handling, or installing the CPU.

![CPU socket](./img/cpu-socket.jpg)

3. The top left corner on the CPU socket indicates the way the CPU should be oriented. Using this as a guide, carefully place the new CPU into the socket in the correct orientation.
4. Lower the CPU locking lever back down into the locked position.

### Steps to install the thermal paste/CPU cooler:

1. Place a small blob of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste-applied.jpg)

2. Place the CPU cooler over the CPU, aligning the two screws on the CPU cooler with the studs on the mounting brackets, and tighten the screws.
    - To distribute the thermal paste evenly across the CPU, tighten each screw a little bit at a time.
3. Reinstall the cooler-mounted CPU fan, CPU shroud, GPUs, GPU bracket, and top case.

## Replacing the power supply:

Your Thelio Mira is equipped with one of three different power supplies. All three power supply units (PSUs) are modular and can be replaced with another unit of the same model. Different models may not be compatible with the cabling pre-installed in the Thelio Mira.

_**Note:** The PSU shown in these photos is not a model that Thelio Mira is being equipped with at the time of writing these instructions. Be sure to confirm which PSU model your machine has before seeking a replacement._

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace](#replacing-a-gpu).
2. Unplug all of the modular cabling from the back of the PSU.
    - Some of the cables may be easier to unplug after the PSU has been unscrewed/removed from the case.

![PSU connectors](./img/psu-connectors.jpg)

3. Unscrew the PSU bracket from the reverse side of the case.

![PSU bracket side screw](./img/psu-bracket-screw-side.jpg)

4. Unscrew the PSU bracket from the bottom of the case.

![PSU bracket bottom screw](./img/psu-bracket-screw-bottom.jpg)

5. Remove the PSU bracket.
6. Unscrew the four screws holding the PSU in from the back of the case.

![PSU back screws](./img/psu-screws.jpg)

7. Remove/replace the PSU. Set the replacement PSU on top of the rubber post that holds it at the correct height.
    - The replacement PSU should be installed with the fan facing the bottom of the case.

![PSU post](./img/psu-post.jpg)

8. After screwing in the replacement PSU and replacing the PSU bracket, use the labels and pin counts on the cables and ports to ensure the power cables are reconnected in the proper locations.
    - Remember that not all of the available connectors will plug into the PSU-- four connectors (on two cables) are to be plugged into the GPUs.
9. If the replacement PSU has an "ECO Mode" switch, make sure it is switched on.

![PSU eco mode switch](./img/psu-eco-mode-switch.jpg)

## Replacing the bottom case fan:

Thelio Mira r1.0 has one intake fan mounted in the bottom of the case.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the bottom case fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Disconnect the fan's cable from the Thelio-IO daughterboard and remove the cable from the cable keeper bundles. The fan connector can be accessed through the cutout in the front of the chassis.

![Case fan cable connection](./img/case-fan-connection.jpg)

3. Unscrew the four fan screws from the bottom of the machine, then remove the fan from the case. The chassis can be laid on its back to make it easier to access these screws.

![Case fan screws](./img/case-fan-screws.jpg)

4. The components should be mounted to the chassis in the following order:
    - Dust filter
    - Acrylic spacer
    - Fan
    
![Fan spacer and dust filter](./img/fan-spacer-and-dust-filter.jpg)

## Replacing the Thelio-IO board:

The Thelio-IO board handles the front power button, fan control, and 2.5" SATA connectors for the system. If the Thelio-IO board becomes defective, it can be replaced using the instructions below.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the Thelio-IO board:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the front cover and any installed drives from the 2.5" drive bays](#addingremoving-25-storage-drives).
2. Use the cutout on the front side of the chassis to unplug all cabling from the Thelio-IO board that is being replaced, including the SATA cables.

![Thelio-IO plugs](./img/thelio-io-plugs.jpg)

![Thelio-IO plugs](./img/thelio-io-sata-plugs.jpg)

3. Unscrew the four screws on the front of the chassis that secure the 2.5" drive cage and remove it from the chassis. Hold the drive cage when removing the final screw to keep it from falling.

![Drive cage screws](./img/drive-cage-screws.jpg)

4. Remove four screws on either side of the drive cage to free the Thelio-IO board from the cage.

![Thelio-IO screws](./img/thelio-io-screws.jpg)

5. Place the new Thelio-IO board into the drive cage, reassemble the drive cage, mount the drive cage back into the chassis, and replace all cables. Below are references for the correct cable orientations:

![Thelio-IO USB plug](./img/thelio-io-usb.jpg)
![Thelio-IO plugs](./img/thelio-io-plugs.jpg)

## Troubleshooting the power button:

If the front power button doesn't power the machine on or doesn't light up when the system is powered on, try the following troubleshooting steps:

1. Ensure the system powers on normally using the internal power button.
2. Reseat the front power button to ensure it's making proper contact.
3. Check the wiring for the front power button.
4. Replace the front power button, if necessary.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to power the machine on using the internal power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Ensure the system is plugged into power, and the power supply switch is in the 1 (On) position.
3. Push the small button labeled `B0` on the Thelio-IO board.

![Internal power button](./img/b0-button.jpg)

4. If the Thelio-IO `B0` button powers the machine on, then the issue is either the front power button or its connection to the Thelio-IO board. [Check the front power button wiring](#steps-to-check-the-front-power-button-wiring).
5. If the Thelio-IO `B0` button does not work, then the issue is either the Thelio-IO board or its connection to the motherboard. [Check the wiring between the Thelio-IO board and the motherboard](#steps-to-check-the-front-power-button-wiring).
6. If all Thelio-IO and power button connections are hooked up correctly, then the issue may be the motherboard, or it may be the power supply or its connection to the motherboard. Ensure all connections are plugged in properly and that the power supply is switched to the 1 (On) position.

### Steps to check the front power button wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace](#replacing-a-gpu). If a second GPU is installed, removing it will make it easier to access the connections on the motherboard.
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right.

![Power button receptacle](./img/power-button-receptacle.jpg)

4. The front power button receptacle should plug into the `PFPD` port on the top Thelio-IO board, with the red wire on the bottom and the black wire on the top.

![Power button wiring on Thelio-IO board](./img/power-wiring-thelio-io.jpg)

5. The `PMBD` port on the Thelio-IO board should connect to the headers on the bottom right corner of the motherboard, as shown below:

![Power button motherboard connections](./img/thelio-io-power-button-motherboard.jpg)

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.

## Troubleshooting the Thelio-IO USB connection:

The Thelio-IO boards connect to the motherboard's USB headers for firmware updates and fan control within the host OS. If the fans seem to be stuck on full blast, check the Thelio-IO USB connections.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to check the USB wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the GPU brace](#replacing-a-gpu). If a second GPU is installed, removing it will make it easier to access the connections on the motherboard.
2. The Thelio-IO board has a `USB0` port. The port connects to a cable (labeled `USB`) with the red wire on the top.

![USB wiring on Thelio-IO board](./img/thelio-io-usb.jpg)
_**Note:** The fan and power button cables have been unplugged in this picture to make it easier to see the USB connector on Thelio-IO._

3. The `USB0` port on the Thelio-IO board should connect to the USB header in the center of the bottom edge of the motherboard, as shown below:

![Thelio-IO wiring on motherboard](./img/thelio-io-usb-motherboard.jpg)
