# Darter Pro (Parts & Repairs)

Many components in your Darter Pro can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)
- [Replacing the battery](#replacing-the-battery)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 16 bottom panel screws:
    - 12 perimeter screws (thin), highlighted green below.
    - 2 keyboard screws (thicker), highlighted yellow.
    - 2 inner hinge screws (thickest), highlighted red.

![Bottom panel screws](./img/bottom-screws.webp)

3. Pull the bottom panel off, starting from the hinges in the back.

## Replacing the RAM:

The Darter Pro 8 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM slots](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports two M.2 SSDs. Both slots are size 2280. SSD-1 supports PCIe NVMe Gen 3 or SATA III, while SSD-2 supports PCIe NVMe Gen 4.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the retainer screw opposite the M.2 slot.
    - SSD-1 is closest to the battery (pictured on the left.)
    - SSD-2 is closest to the outer edge of the machine (on the right.)

![M.2 slots](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.
6. If a square brace was present on the old drive, transfer it to the new drive.

## Replacing the wireless card:

Your Darter Pro's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 12 minutes  
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

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 12 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector attaching the CMOS battery to the motherboard (highlighted green below.)

![CMOS battery](./img/cmos-battery.webp)

3. If you are replacing the CMOS battery, [remove SSD-1](#replacing-an-m2nvme-ssd) to expose the CMOS battery, then pull it away from the adhesive holding it to the case.
4. To clear the CMOS, [disconnect the main battery](#replacing-the-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery and the main battery, and replace the SSD and bottom panel.
7. Power up the machine. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Darter Pro 8 has a single fan and heatsink to cool the CPU. The fan and heatsink are a single part (they should not be replaced separately from one another.)

If the fan becomes noisy and cleaning it out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fan/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Peel back the black tape holding the fan to the chassis, and remove any clear tape that is securing the wires.
3. Unplug the black fan connector.
    - This can alternatively be done after the fan/heatsink is removed.
4. Remove the seven heatsink/fan screws in order, starting with #1, then #2, and so on until #7.

![Thermal screws](./img/thermal-system.webp)

5. Remove the fan and heatsink from the system, being careful not to bend the heatsink pipe. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. After cleaning the CPU and heatsink, apply a small line of thermal paste directly onto the CPU chip.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the seven heatsink/fan screws in order, starting with #1, then #2, and so on until #7.

## Replacing the keyboard:

The keyboard can be replaced using the instructions below.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the keyboard:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the two keyboard screws (highlighted yellow below).

![Keyboard screws](./img/keyboard-screws.webp)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted cyan above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.webp)

5. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbons](./img/keyboard-ribbons.webp)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. Place the keyboard back into position, starting with the tabs on the bottom edge.
12. Secure the rest of the keyboard by pressing down on each of its edges.
13. Turn the machine lid-side down again and replace the two keyboard screws.

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**CAUTION:** Do not use metal tools to remove the battery. Do not touch the battery contacts with your hands or metal objects. If the battery is damaged during repairs, do not reinsert it into the laptop. Do not continue to use the computer if it contains a damaged battery. It is a potential fire hazard to operate a computer with a damaged battery. Keep children away from, and properly dispose of, the damaged battery. Always dispose of batteries carefully, by placing a piece of tape on the contact points. Take damaged batteries to an electronics recycling center and contact System76 to purchase a replacement. Batteries may explode or leak if exposed to fire, or if improperly handled or discarded. Only use batteries designed for your specific computer. This product contains a rechargeable battery. The battery is recyclable. At the end of its useful life, under various state and local laws, it may be illegal to dispose of this battery into the municipal waste stream. Check with your local solid waste officials for details in your area for recycling options or proper disposal.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector that connects the battery to the motherboard.

![Main battery](./img/battery.webp)

3. Remove the battery.
    - The battery is secured to foam standoffs with double-sided tape.
    - A flat plastic object (such as a credit card) can be used to separate the tape from the battery.
    - If any tabs from the tape are visible around the perimeter of the battery, do not push them back under the battery.
        - Hold the tabs down while inserting the plastic tool to separate the tape and foam from the battery.
        - Alternatively, pull the tabs up with the battery to separate the tape and foam from the chassis.

![Battery tape](./img/battery-tape.webp)

4. Put the battery back (or put your new battery in its place) and plug it back into the motherboard.
