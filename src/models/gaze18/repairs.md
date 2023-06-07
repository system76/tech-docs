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
- [Replacing the speakers](#replacing-the-speakers)

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

3. Pull the bottom panel off, starting from over the ports in the back.

## Replacing the RAM:

The Gazelle 18 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

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

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. The inner-most slot supports PCIe NVMe Generation 4, and the outer-most slot supports PCIe NVMe Generation 3.

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

**Tools required:** Cross-head (Phillips) screwdriver
**Time estimate:** 8 minutes
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
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

4. To clear the CMOS, [disconnect the main battery](#replacing-the-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery.
6. [Reconnect the main battery](#replacing-the-battery), [replace the M.2 SSD](#replacing-an-m2nvme-ssd), and [replace the bottom cover](#removing-the-bottom-cover).
7. Power up the Gazelle. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Gazelle 18 includes two fans as part of a single heatsink/fan assembly.

If the CPU/GPU fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase.

Thermal paste helps facilitate heat transfer between the CPU/GPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU/GPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove any clear tape that is securing the fan wires.
3. Remove the silver heatsink and fan screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #12.
    - *Note: Do not remove the smaller black screws holding the fan covers onto the fans.*

![Thermal screws](./img/thermal-screws.webp)

4. Unplug the two white fan connectors from the motherboard (highlighted cyan above).
5. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto both CPU chips and the GPU chip.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the silver heatsink and fan screws, starting with #1, then #2, and so on until #12.
10. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

**Tools required:** Cross-head (Phillips) screwdriver, tweezers (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the keyboard adhesive strip at the edge of the motherboard underneath the right fan's heatsink pipe, highlighted green below.
    - You can optionally [remove the heatsink](#replacing-the-cooling-system) to make the adhesive easier to grasp. Replacing the thermal paste is recommended if the heatsink is removed.

![Keyboard adhesive strip location](./img/keyboard-adhesive.webp)

3. Using a pair of tweezers to reach the end of the strip (if necessary), pull out the end of the keyboard adhesive strip to stretch and detatch it.
4. Open the lid slightly and place the machine on its side.
5. Push a screwdriver into the keyboard push point (next to the RAM slot) until the keyboard pops out.

![Keyboard push point location](./img/keyboard-push-point-location.webp)
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
14. Turn the machine lid-side down again and [replace the bottom cover](#removing-the-bottom-cover).

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the left speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the main battery](#replacing-the-battery).
2. Flip the black latches up to release both sides of the I/O daughterboard ribbon cable from the motherboard and the I/O daughterboard.

![I/O daughterboard ribbon cable](./img/speaker-left-ribbon.webp)

3. Peel the ribbon cable away from the chassis.
    - The ribbon cable is adhered to the chassis. Pull slowly to avoid damage.
4. Disconnect the speaker connector from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Left speaker wire and posts](./img/speaker-left.webp)

5. Pull the speaker up and off of the plastic posts, and free the speaker wire from any tape and channels in the chassis.
6. Slide the new speaker onto the plastic posts and connect it to the motherboard, securing the wire using the channels in the chassis.
7. Reconnect the ribbon cable to the motherboard and I/O daughterboard, then flip the black latches to secure both connections.
8. Replace the [main battery](#replacing-the-battery) and [bottom cover](#removing-the-bottom-cover).

### Steps to replace the right speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
    - The [outermost SSD](#replacing-an-m2nvme-ssd) can optionally be removed to make it easier to work with the speaker plug.
2. Disconnect the speaker connector from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Right speaker wire and posts](./img/speaker-right.webp)

3. Pull the speaker up and off of the plastic posts.
4. Slide the new speaker onto the plastic posts and connect it to the motherboard.
5. Replace the [SSD](#replacing-an-m2nvme-ssd) (if necessary) and [bottom cover](#removing-the-bottom-cover).
