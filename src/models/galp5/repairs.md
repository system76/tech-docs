# Galago Pro (Parts & Repairs)

Many components in your Galago Pro can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Removing the battery](#removing-the-battery)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 14 bottom panel screws.
    - The two hinge corner screws (highlighted yellow below) are slightly thicker than the rest.

![Bottom panel screws](./img/bottom-panel-screws.jpg)

3. Pull the bottom panel off, starting from the hinges and vents in the back.

## Removing the battery:

The battery provides primary power whenever the system is unplugged.

The model number for the Galago Pro 5's battery is `NV40BAT-4-49`, and the original part number is `6-87-NV40S-41B01`. Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number. You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the five battery screws, highlighted red below.

![Battery screws](./img/battery.jpg)

3. Unplug the battery connector (highlighted green above) and lift the battery out of the chassis.

## Replacing the RAM:

The Galago Pro 5 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM slots](./img/ram-slots.jpg)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports one M.2 SSD of size 2280, PCIe NVMe Generation 4 (or Generation 3).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slot](./img/m2-slot.jpg)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.

## Replacing the wireless card:

Your Galago Pro's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 12 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
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

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [1 (800) 498-8666](tel:18004988666)

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Follow the steps above to [remove the M.2 drive](#replacing-an-m2nvme-ssd), then pull the battery away from the adhesive holding it to the case.
    - If you are not replacing the CMOS battery, this step is optional, but will make it easier to unplug the CMOS battery connector.

![CMOS battery](./img/cmos-battery.jpg)

3. Unplug the white connector attaching the CMOS battery to the motherboard (highlighted green above.) 
4. To clear the CMOS, [disconnect the main battery](#removing-the-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery and main battery, and replace the M.2 drive and bottom panel.
6. Power up the machine. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Galago Pro 5 has a single heatsink for the CPU and GPU (integrated or discrete). One fan is attached to the heatsink, while one additional fan is separate from the heatsink.

If a fan becomes noisy and cleaning it out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU/GPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove any clear tape that is securing the fan wires.
3. Unplug the white fan connector and remove the two fan screws, highlighted yellow below.

![Thermal screws](./img/thermal-screws.jpg)

4. Remove the eight heatsink screws (highlighted cyan above) in order, starting with #1, then #2, and continuing until #8.
    - On the Intel-only model, only four heatsink screws are present.
5. Remove the heatsink from the system, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU/GPU chips.
    - On the Intel-only model, only the CPU chip (on the left) is present.

![Thermal paste application](./img/thermal-paste-application.jpg)

8. Carefully replace the heatsink.
9. Replace the eight heatsink screws, starting with #1, then #2, and continuing until #8.
    - On the Intel-only model, only four heatsink screws are present.
10. Replace the two fan screws and plug in the white fan connector.

### Steps to replace the additional fan:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove any clear tape that is securing the fan wires.
3. Remove the two fan screws, highlighted red below.

![Fan screws](./img/additional-fan-screws.jpg)

4. Unplug the white fan connector, highlighted green above.
5. Remove the fan from the system.

## Replacing the keyboard:

The keyboard can be replaced using the instructions below.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the keyboard:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the two keyboard screws, highlighted cyan below.

![Keyboard screws](./img/keyboard-screws.jpg)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted yellow above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.jpg)

5. Set the machine upright and flip the keyboard down onto the touchpad. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbons](./img/keyboard-ribbons.jpg)

6. Flip the black latches away from the white connectors to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. Place the keyboard back into position, starting with the tabs on the bottom edge.
12. Secure the rest of the keyboard by pressing down on each of its edges.
13. Turn the machine lid-side down again and replace the two keyboard screws.
