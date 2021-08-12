# Gazelle (Parts & Repairs)

Many components in your Gazelle can be upgraded or replaced as necessary. This page uses photos of the 15" model, but screw counts, general component locations, and other details are the same on the 17" model unless otherwise noted.

- [Removing the battery](#removing-the-battery)
- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing a 2.5" storage drive](#replacing-a-25-storage-drive)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** None  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the battery:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Slide the locking slider (highlighted cyan below) into the unlocked position.

![Battery](./img/battery.jpg)

3. While holding the springing slider (highlighted red above) in the unlocked position, grasp the tab in the corner and lift the battery out of the machine.

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Follow the steps above to [remove the battery](#removing-the-battery).
2. Remove the bottom panel screws.
    - On the 15" model:
        - There are 16 screws total.
        - The two back corner screws (highlighted red below) are slightly longer than the rest.
        - The silver hinge screw (highlighted cyan below) is slightly shorter than the rest.
        ![15" bottom panel screws](./img/bottom-panel-screws-15.jpg)
    - On the 17" model:
        - There are 17 screws total.
        - The battery connector screw (highlighted cyan below) is the shortest.
        - The other two under-battery screws (highlighted green below) may also be shorter than the rest.
        ![17" bottom panel screws](./img/bottom-panel-screws-17.jpg)

3. Pull the bottom panel off of the case, starting behind the battery slot.

## Replacing the RAM:

The Gazelle 16 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM slots](./img/ram-slots.jpg)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. The outer-most slot (farthest away from the fans) supports PCIe NVMe Generation 4, and the inner-most slot (closest to the fans) supports SATA or PCIe NVMe Generation 3.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slots](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.

## Replacing the wireless card:

Your Gazelle's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless module. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.jpg)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the main battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector that connects the CMOS battery to the motherboard.

![CMOS battery](./img/cmos-battery.jpg)

3. If you are replacing the battery, remove any clear tape holding the battery in place and gently pull the battery up from where it's stuck to the case.
4. To clear the CMOS, open the lid of the machine and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery.
6. [Replace the M.2 SSD](#replacing-an-m2nvme-ssd), [replace the bottom cover](#removing-the-bottom-cover), and [replace the main battery](#removing-the-battery).
7. Power up the Gazelle. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing a 2.5" storage drive:

This model supports one 2.5" (7mm height) SATA III SSD or hard drive.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace a 2.5" storage drive:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the single screw holding the 2.5" drive bracket into the case.

![2.5" drive bracket screw](./img/25-bracket-screw.jpg)

3. Slightly lift the loose end of the 2.5" drive and slide it out of the SATA port.

![2.5" drive removal](./img/25-drive-removal.jpg)

4. Unscrew the two screws holding the 2.5" drive into the drive bracket (one on either side.)

![2.5" drive side screw](./img/25-side-screw.jpg)

5. Insert the new 2.5" drive into the drive bracket and replace the two side screws.
6. Plug the 2.5" drive into the SATA port and set the drive into the case.
7. Screw the drive bracket back into the case.

## Replacing the cooling system:

If the CPU/GPU fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Thermal paste helps facilitate heat transfer between the CPU/GPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU/GPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the silver heatsink screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #8.
    - The order for the 15" model is shown below; the screws are numbered differently on the 17" model. Follow the order stamped into the heatsink metal.

![Thermal screws](./img/thermal-screws.jpg)

3. Remove the black screws holding the fans onto the chassis in order, starting with #9 and continuing through #14.
    - *Note: Do not remove the smaller black screws holding the fan covers onto the fans.*
4. If there is any clear tape securing the heatsink/fans or the fan wires, remove it.
5. Unplug the two white fan connectors from the motherboard (highlighted cyan above).
6. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
7. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

8. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU and GPU chips.

![Thermal paste application](./img/thermal-paste-application.jpg)

9. Carefully replace the heatsink.
10. Replace the silver heatsink screws, starting with #1, then #2, and so on until #8.
11. Replace the black fan screws, starting with #9 and continuing through #14.
12. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

Keyboard replacement is simple and requires only a cross-head screwdriver.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the keyboard:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 2 keyboard screws, indicated by the small keyboard icons.

![Keyboard screws](./img/keyboard-screws.jpg)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted red above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.jpg)

5. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbon connectors](./img/keyboard-ribbons.jpg)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. Place the keyboard back into position, starting with the tabs on the bottom edge.
12. Secure the rest of the keyboard by pressing down on each of its edges.
13. Turn the machine lid-side down again and replace the two keyboard screws.
