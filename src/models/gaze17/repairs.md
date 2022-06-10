# Gazelle (Parts & Repairs)

Many components in your Gazelle can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 13 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from the hinges in the back.

## Replacing the RAM:

The Gazelle 16 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Pull the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM slots](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. The inner-most slot supports PCIe NVMe Generation 4, and the outer-most slot supports PCIe NVMe Generation 3 or SATA.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
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

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless module. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.webp)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** None  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the battery:

1. Follow the steps above to remove the bottom cover.
2. Remove the five battery screws, highlighted yellow below.

![Battery](./img/battery.webp)

3. Unplug the battery connector (highlighted red above) and lift the battery out of the chassis.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Follow the steps above to [remove the outermost M.2 drive](#replacing-an-m2nvme-ssd), then pull the battery away from the adhesive holding it to the case. 
    - If you are not replacing the CMOS battery, this step is optional, but will make it easier to unplug the CMOS battery connector.
3. Unplug the white connector that connects the CMOS battery to the motherboard.

![CMOS battery](./img/cmos-battery.webp)

4. To clear the CMOS, [disconnect the main battery](replacing-the-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery.
6. [Reconnect the main battery](replacing-the-battery), [replace the M.2 SSD](#replacing-an-m2nvme-ssd), and [replace the bottom cover](#removing-the-bottom-cover).
7. Power up the Gazelle. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

If the CPU/GPU fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Thermal paste helps facilitate heat transfer between the CPU/GPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU/GPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Remove any clear tape that is securing the fan wires.
3. Remove the silver heatsink screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #6.

![Thermal screws](./img/thermal-screws.webp)

4. Remove the six silver screws holding the fans onto the chassis in order, highlighted green above.
    - *Note: Do not remove the smaller black screws holding the fan covers onto the fans.*
5. Unplug the two white fan connectors from the motherboard (highlighted cyan above).
6. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
7. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

8. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU and GPU chips.

![Thermal paste application](./img/thermal-paste-application.webp)

9. Carefully replace the heatsink.
10. Replace the silver heatsink screws, starting with #1, then #2, and so on until #6.
11. Replace the silver fan screws.
12. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

Keyboard replacement is simple and requires only a cross-head screwdriver.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the keyboard adhesive strip at the edge of the motherboard underneath the right fan's heatsink pipe, highlighted green below.

![Keyboard adhesive strip location](./img/keyboard-adhesive-location.webp)

3. Using a pair of tweezers, pull out the end of the adhesive strip.

![Keyboard adhesive strip removal](./img/keyboard-adhesive-removal.webp)

- Alternatively, to remove the keyboard without tweezers, you can [remove the heatsink](#replacing-the-cooling-system) so the adhesive strip is exposed.
    - This method is not recommended unless you are also replacing the thermal paste.

![Exposed keyboard adhesive strip](./img/keyboard-adhesive-exposed.webp)

4. Open the lid slightly and place the machine on its side.
5. Push a screwdriver into the keyboard push point (next to the RAM slot) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.webp)

6. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbon connectors](./img/keyboard-ribbons.webp)

7. Flip the black latches upwards to free the ribbon cables.
8. Pull the ribbon cables out of the connectors.
9. Remove the keyboard and replace it with the new one.
10. Carefully slide both ribbon cables into their connectors.
11. Flip the black latches back into place to secure the ribbon cables.
12. Place the keyboard back into position, starting with the tabs on the bottom edge.
13. Secure the rest of the keyboard by pressing down on each of its edges.
14. Turn the machine lid-side down again and replace the two keyboard screws.
