# Kudu (Parts & Repairs)

Many components in your Kudu can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)
- [Replacing the DC-in jack](#replacing-the-dc-in-jack)

## Removing the battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** None  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the battery:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Slide the locking slider (highlighted cyan below) into the unlocked position.

![Battery](./img/battery.webp)

3. While holding the springing slider (highlighted red above) in the unlocked position, grasp the tab in the corner and lift the battery out of the machine.

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (such as USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Follow the steps above to [remove the battery](#removing-the-battery).
2. Remove the 16 bottom panel screws.
    - The silver hinge screw (highlighted cyan below) is slightly shorter than the rest.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off of the case, starting behind the battery slot.

## Replacing the RAM:

The Kudu 6 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280, and both slots support PCIe NVMe Generation 3 only.

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

Your Kudu's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
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
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the small white connector that connects the CMOS battery to the motherboard.
    - If you are replacing the battery, remove any clear tape, then gently pull from the sides to pry it up from where it's stuck to the case.

![CMOS battery](./img/cmos-battery.webp)

3. To clear the CMOS, [disconnect the main battery](#replacing-the-battery) (if it's still installed), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Re-connect the CMOS battery, [replace the main battery](#replacing-the-battery), and [replace the M.2 SSD](#replacing-an-m2nvme-ssd).
5. Replace the bottom panel and power up the Kudu. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Kudu 6 has a single heatsink for the CPU and GPU. One fan is attached to the heatsink, while the other fan is separate from the heatsink.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU/GPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment. These instructions can also be used in the unlikely event that your heatsink needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the standalone fan:

1. Follow the steps above to [remove the battery](#removing-the-battery) and [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the standalone fan.
    - The standalone fan is located between the battery slot and the M.2 drives, next to the DC-in port.
3. If there is any clear tape on the fan securing the DC-in cable, remove it.
4. Remove the three screws attaching the standalone fan to the chassis.
    - Do not remove the smaller screws holding the fan's cover on.

![Standalone fan screws](./img/fan-screws.webp)

5. Unplug the fan connector, highlighted cyan above.
6. Lift the fan out of the system.
    - The fan grill at the edge of the chassis is part of the heatsink, and will not lift out with the fan.

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the standalone fan](#steps-to-replace-the-standalone-fan).
    - Removing the standalone fan is not physically required, but is recommended to ensure the heatsink is reinstalled properly.
2. Remove the heatsink and fan screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #10.
    - The first four screws (#1 - #4) are held captive and will not pull away from the heat sink when loosened.

![Thermal screws](./img/thermal-screws.webp)

3. Unplug the white fan connector from the motherboard (highlighted cyan above).
4. Remove the heatsink/fan from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
5. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU and GPU chips.

![Thermal paste application](./img/thermal-paste-application.webp)

10. Carefully replace the heatsink.
11. Replace the silver heatsink screws, starting with #1, then #2, and so on until #6.
12. Replace the black fan screws.
13. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

Keyboard replacement is simple and requires only a cross-head screwdriver.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the keyboard:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 2 keyboard screws, indicated by the small keyboard icons.

![Keyboard screws](./img/keyboard-screws.webp)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted red above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.webp)

5. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbon connectors](./img/keyboard-ribbons.webp)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. Place the keyboard back into position, starting with the tabs on the bottom edge.
12. Secure the rest of the keyboard by pressing down on each of its edges.
13. Turn the machine lid-side down again and replace the two keyboard screws.

## Replacing the DC-in jack:

If the DC-in jack (power connector) is no longer making contact with the barrel charger, and replacing the charger doesn't fix the issue, the DC-in jack can be replaced.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the DC-in jack:

1. Remove any clear tape securing the internal DC-in cable.
2. Unscrew the two screws holding the DC-in connector onto the chassis, highlighted cyan below.

![DC-in power connector](./img/power-connector.webp)

3. Unplug the internal DC-in cable from the motherboard.
4. Plug in the new cable, replace the screws, and (optionally) replace the tape.