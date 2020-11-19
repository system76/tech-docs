# Meerkat (Parts & Repairs)

Several components in your Meerkat can be upgraded or replaced as necessary. Power the machine off and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the bottom panel](#removing-the-bottom-panel)
- [Replacing the M.2 drive](#replacing-the-m2-drive)
- [Replacing the RAM](#replacing-the-ram)
- [Adding/removing a 2.5" storage drive](#addingremoving-a-25-storage-drive)
- [Resetting CMOS](#resetting-cmos)

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
**Difficulty:** Medium <span style="color:yellow;">●</span>  

### Steps to reset CMOS:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-the-m2-drive).
2. Disconnect the CMOS battery connector, shown circled in red below. Tweezers may make this easier, but try to pull it by the plug itself rather than by the wires.

![CMOS battery connector](./img/cmos-connector.jpg)

3. Leave the connector unplugged for several minutes. CMOS values don't always clear instantly, and sometimes it takes a couple minutes for them to reset.
4. Reconnect the CMOS battery.
5. Replace the M.2 drive and the bottom panel.
6. When you boot your Meerkat after resetting CMOS, it may take a minute or two longer than usual to boot the first time. It has to re-initialize some of the CMOS values that were reset.
