# Oryx Pro (Parts & Repairs)

Many components in your Oryx Pro can be upgraded or replaced as necessary. This page uses photos of the 15" model, but screw counts, general component locations, and other details are the same on the 17" model unless otherwise noted.

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
2. Remove the 12 bottom panel screws.
    - On the 15" model, the two back corner screws are longer than the rest (highlighted red below.)
    - On the 17" model, all screws are the same length.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Lift the bottom panel off of the case.

## Replacing the RAM:

The Oryx Pro 8 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. The inner-most slot (closest to the battery) supports only PCIe NVMe Generation 4, and the outer-most slot (farthest away from the battery) supports either PCIe NVMe Generation 3 or SATA III.

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

Your Oryx Pro's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
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

The model number for the Oryx Pro 8's battery is `PC50BAT-3`, and the original part number is `6-87-PC50S-72A03`. Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number. You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. If there is an M.2 SSD in the slot closest to the battery, follow the steps above to [remove the M.2 SSD](#replacing-an-m2nvme-ssd).
3. The battery is held in by three of the bottom panel screws and two additional screws, one of which is underneath the M.2 SSD. Remove the two final screws, highlighted red below.

![Battery screws](./img/battery.webp)

4. Unplug the white connector (highlighted yellow above) connecting the battery to the motherboard.
5. Remove the battery, starting with the plastic tabs next to the screw holes.
5. When plugging in the new battery, the red wire on the connector goes on the left, and the black wire goes on the right.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. If necessary, remove any components that are covering the CMOS battery:
    - For the 15" model, [remove the M.2 SSD closest to the main battery](#replacing-an-m2nvme-ssd) and [remove the main battery](#replacing-the-battery).
    - For the 17" model, [remove both M.2 SSDs](#replacing-an-m2nvme-ssd).

![CMOS battery](./img/cmos-battery.webp)

3. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, gently pull from the sides to pry it up from where it's stuck to the case.
4. To clear the CMOS, [disconnect the main battery](#replacing-the-battery) (if it's still installed), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery, [replace the main battery](#replacing-the-battery), and [replace the M.2 SSD](#replacing-an-m2nvme-ssd).
6. Replace the bottom panel and power up the Oryx Pro. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

If the CPU/GPU fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU/GPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment. These instructions can also be used in the unlikely event that your heatsink needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the CPU heatsink screws.
3. Remove the silver screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #6.
    - The order for the 15" model is shown below; the screws are numbered differently on the 17" model. Follow the order stamped into the heatsink metal.

![Thermal screws](./img/thermal-screws.webp)

4. Remove the 6 black screws holding the fans onto the chassis (highlighted green above.) *Note: Do not remove the smaller black screws holding the fan covers onto the fans.*
5. If there is any clear tape securing the heatsink/fans or the fan wires, remove it.
6. Unplug the two white fan connectors from the motherboard (highlighted cyan above).
7. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
8. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

9. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU and GPU chips.

![Thermal paste application](./img/thermal-paste-application.webp)

10. Carefully replace the heatsink.
11. Replace the silver heatsink screws, starting with #1, then #2, and so on until #6.
12. Replace the black fan screws.
13. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

**Tools required:** Cross-head (Phillips) screwdriver, tweezers (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the keyboard adhesive strip behind the right fan.

![Keyboard adhesive access point](./img/keyboard-adhesive.webp)

3. Using a pair of tweezers, pull out the end of the adhesive strip.

![Keyboard adhesive removal](./img/keyboard-adhesive-removal.webp)

- Alternatively, to remove the keyboard without tweezers, [remove the fan](#replacing-the-cooling-system) so the adhesive is exposed, then pull it away from the keyboard.
    - This method is not recommended unless you are also replacing the thermal paste.

![Keyboard adhesive behind fan](./img/keyboard-adhesive-exposed.webp)

4. Open the lid slightly and place the machine on its side.
5. Push a screwdriver into the adhesive slot until the keyboard pops out.
    - If the fan has been removed, the keyboard can also be pushed out from behind the fan blade cutouts.

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
14. Turn the machine lid-side down again and press the adhesive strip back into its slot.
    - The visible end of the adhesive strip does not need to completely go back into place; the keyboard is primarily held in place by the perimeter clips and the non-visible section of adhesive.
