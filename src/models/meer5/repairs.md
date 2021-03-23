# Meerkat (Parts & Repairs)

Several components in your Meerkat can be upgraded or replaced as necessary. Power the machine off and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the bottom panel](#removing-the-bottom-panel)
- [Replacing the M.2 drive](#replacing-the-m2-drive)
- [Replacing the RAM](#replacing-the-ram)
- [Adding/removing a 2.5" storage drive](#addingremoving-a-25-storage-drive)
- [Resetting CMOS](#resetting-cmos)
- [Removing the motherboard](#removing-the-motherboard)
- [Removing the fan](#removing-the-fan)
- [Replacing thermal paste](#replacing-thermal-paste)
- [Mounting with VESA mount](#mounting-with-vesa-mount)

## Removing the bottom panel:

The bottom panel can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 3 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom panel:

1. Turn your Meerkat over on its back and completely loosen the four screws in the corners.

![Bottom panel screws](./img/meer5-bottom-screws.png)

2. The screws are held captive in the bottom panel, so they will not come completely out of the machine, but once they are fully loose, you will be able to grab the screws and gently lift the bottom panel out of the machine. 

   If your Meerkat is the Tall variation, use caution when lifting the bottom panel off, as there is a thin cable that attaches to the drive bay in the bottom panel. The cable should be long enough that you can set the bottom panel next to the machine without having to disconnect it at the motherboard, as shown below: 
   
![Meerkat internal components](./img/meer5-components.png)

   If your Meerkat is the Short variation, you will have no such cable, allowing you to completely remove the bottom panel after the four screws are completely loosened.

## Replacing the M.2 drive:

Your Meerkat has one M.2 slot, which supports either PCIe NVMe Gen 3 x4 or SATA III. The following M.2 sizes are supported: 2280 and 2242.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Unscrew the retainer screw on the end of the SSD opposite the M.2 slot.

![M.2 slot screw](./img/m2-screw.jpg)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.
6. Replace the bottom panel.

## Replacing the RAM:

Your Meerkat supports up to 64GB (2x32GB) of RAM. The RAM sticks are DDR4 SODIMMs running at a speed of 2666MHz. If you've purchased new RAM, need to replace your RAM, or are re-seating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Since the RAM slots are stacked on your Meerkat, if you have two RAM sticks installed, the top one must be removed before you can access the one below it. To remove a RAM stick, both RAM latches need to be simultaneously pushed out and away from the edges of the RAM stick.

![RAM latch](./img/ram-latch.jpg)

3. Once both latches are released, the RAM stick will pop up, pushed by the spring tension from the RAM slot. This means the RAM stick can be pulled backwards out of the slot.

![Unlatched RAM](./img/unlatched-ram.jpg)

4. To install a RAM stick, slide the stick into the slot at roughly the same angle it was sitting after the latches were released, then push the back edge of the RAM stick downwards so the latches on the sides re-engage.

5. Replace the bottom panel.

## Adding/removing a 2.5" storage drive:

If your Meerkat is the tall variety, it has a 2.5" drive bay built into the bottom panel.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Take note of the orientation of the connector on the drive you are installing. 

![2.5" drive connector](./img/drive-connector.jpg)

3. Slide the drive into the slot on the bottom panel until it plugs all the way into its connector.

![2.5" drive installation](./img/drive-insertion.jpg)

4. Replace the bottom panel.

## Resetting CMOS:

Sometimes resetting CMOS can help if your Meerkat is not booting. A CMOS reset will restore BIOS settings to their factory defaults, so you may have to reconfigure your BIOS afterwards.

**Tools required:** Cross-head (Phillips) screwdriver and (optionally) tweezers  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to reset CMOS:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-the-m2-drive).
2. Disconnect the CMOS battery connector, shown circled in red below. Tweezers may make this easier, but try to pull it by the plug itself rather than by the wires.

![CMOS battery connector](./img/cmos-connector.jpg)

3. Leave the connector unplugged for several minutes. CMOS values don't always clear instantly, and sometimes it takes a couple minutes for them to reset.
4. Reconnect the CMOS battery.
5. Replace the M.2 drive and the bottom panel.
6. When you boot your Meerkat after resetting CMOS, it may take a minute or two longer than usual to boot the first time. It has to re-initialize some of the CMOS values that were reset.

## Removing the Motherboard:

Removing the motherboard is necessary for removing the cooling fan, cleaning the CPU heatsink, and replacing the CPU thermal paste. 

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to remove the motherboard:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the M.2 drive](#replacing-the-m2-drive), and [remove the RAM](#replacing-the-ram).
2. If your Meerkat is the tall variety, disconnect the ribbon cable that leads to the 2.5" drive bay built into the bottom panel. The small white latch comes up to unlock the cable, then the cable can be gently pulled free from its socket.

![SATA drive bay ribbon cable connector](./img/sata-bay-connector.jpg)

3. Disconnect the front microphone cable.

![Front microphone connector](./img/front-mic-connector.jpg)

4. Disconnect the two wireless antenna cables.

![Wireless antenna connectors](./img/wifi-antenna-connectors.jpg)

5. Remove the two motherboard mounting screws.

![Motherboard mounting screws](./img/motherboard-screws.jpg)

6. Carefully lift the motherboard out of the case. It is easiest to lift from the back side, grabbing the USB type A ports as shown below. The back wall of the case can be pulled slightly outwards, away from the motherboard, to help the ports come out of their cutouts in the case.

![Removing the motherboard](./img/removing-motherboard.jpg)

## Removing the Fan:

The cooling fan can be removed to clean dust out of the cooling system or to access the CPU heatsink to replace the CPU thermal paste.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to remove the fan:
1. Follow the steps above to [remove the motherboard](#removing-the-motherboard).

2. Completely loosen the three mounting screws (highlighted in red) and disconnect the fan cable (highlighted in green). The screws are captive, so they will not come out of the fan assembly when they are completely loosened.

![Fan screws and cable locations](./img/fan-screws-and-cable.jpg)

3. The fan can now be lifted away from the motherboard.

![Fan removed from motherboard](./img/fan-removed.jpg)

## Replacing Thermal Paste:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fan expels it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the thermal paste:

1. Follow the steps above to [remove the fan](#removing-the-fan).

2. Completely loosen the four screws that hold the heatsink onto the motherboard (highlighted in red). The screws are captive, so they will not come out of the heatsink brackets when completely loosened.

![Heatsink screws](./img/heatsink-screws.jpg)

3. Gently lift the heatsink off of the motherboard. 

![Heatsink removed from motherboard](./img/heatsink-removed.jpg)

4. Using a paper towel, clean the old thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Heatsink and motherboard after cleaning](./img/heatsink-cleaned.jpg)

5. Apply new thermal paste to both silicon dies on the CPU. Be careful not to use too much, as just a little goes a long way.

![Thermal paste applied to CPU](./img/thermal-paste-applied.jpg)

6. Reinstall the heatsink and tighten the four screws in the order indicated by the numbers stamped on the heatsink (highlighted in red).

![Heatsink screw tightening order](./img/heatsink-screw-order.jpg)

7. Reinstall the cooling fan (remember to plug it in!), motherboard, RAM, drive, and bottom panel.

## Mounting with VESA Mount:

Your Meerkat comes with a VESA mount adapter, which allows it to be mounted on the back of a monitor. Because it mounts to the monitor's VESA mount, this will only work on monitors which aren't already mounted via the VESA mount.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to mount with the VESA adapter:

![VESA mount and screws](./img/vesa-mount-and-screws.jpg)

1. Thread the two shoulder screws into the two screw holes in the bottom of the Meerkat.

![Screws in Meerkat](./img/shoulder-screws.jpg)

2. Mount the VESA adapter plate to the VESA mount on your monitor with the remaining four screws. The "UP" arrow indicates the orientation it should be mounted in. 

![Adapter installed on monitor](./img/adapter-installed.jpg)

3. Align the two shoulder screw studs to the cutouts in the VESA adapter. Once the studs are lined up, slide the Meerkat downwards and rotate it slightly clockwise to lock it into place.

![Installing the Meerkat](./img/vesa-studs.jpg)
![Meerkat installed](./img/meer5-vesa-installed.jpg)
