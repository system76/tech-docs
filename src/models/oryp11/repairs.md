# Oryx Pro (Parts & Repairs)

Many components in your Oryx Pro can be upgraded or replaced as necessary.

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the speakers](#replacing-the-speakers)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 16 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from the hinges in the back.

## Replacing the RAM:

The Oryx Pro 11 supports up to 64GB (2x32GB) of DDR5 SO-DIMMs running at 4800MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

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

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. Both slots support PCIe NVMe Generation 4 only. The slots are backwards-compatible with PCIe NVMe Generation 3 drives, but the slots do not support SATA.

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
6. If you are using a slot for the first time, you can optionally remove the plastic backing from the thermal strip and apply it to the inner side of the bottom panel.

![M.2 slot thermal strip application](./img/m2-thermal-strip.webp)

## Replacing the battery:

The battery provides primary power whenever the system is unplugged. The model number is `NV40BAT-4-73`, also known as `6-87-NV4RS-71M00`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the five silver battery screws along the perimeter of the battery.

![Battery screws](./img/battery.webp)

3. Unplug the white connector (highlighted yellow above) connecting the battery to the motherboard.
4. Remove the battery, starting from the bottom edge with screw holes.
5. When putting in the new battery, start with the plastic tabs along the top edge (opposite from the screw holes.)
6. When plugging in the new battery, the red wire on the connector goes on the left, and the black wire goes on the right.

## Replacing the wireless card:

Your Oryx Pro's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless card. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.webp)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. Keeping the wireless card parallel with the motherboard, slide the card out of the M.2 slot.
6. Insert the new wireless card into the M.2 slot.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and, if installed, [remove the SSD from slot 2](#replacing-an-m2nvme-ssd) (closest to the [main battery](#replacing-the-battery)).

![CMOS battery](./img/cmos-battery.webp)

2. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, gently pull from the sides to pry it up from where it's stuck to the case.
3. To clear the CMOS, [disconnect the main battery](#replacing-the-battery) (if it's still installed), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Reconnect the CMOS battery, [reconnect the main battery](#replacing-the-battery), and [replace the M.2 SSD in slot 2](#replacing-an-m2nvme-ssd) (if necessary).
5. Replace the bottom panel and power up the Oryx Pro. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Oryx Pro 11 uses two fans and a heatsink manufactured as a single assembly. The part number for the complete assembly is YINGFAN `6-31-PE60N-102`. The part number for the left fan is WINMA `EFC-92091S2-0BH`; the part number for the right fan is WINMA `EFC-90091S2-0BH`.

If the CPU/GPU fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase.

Thermal paste helps facilitate heat transfer between the CPU/GPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU/GPU and the heatsink may help the system run cooler. It's recommended to replace the thermal paste whenever the heatsink is removed.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 40 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove any clear tape that is securing the fan wires.
3. Remove the heatsink and fan screws in the order of the stamped and stickered numbers, starting with #1, then #2, and continuing until you have removed #12.
    - *Note: Do not remove the smaller screws holding the fan covers onto the fans.*

![Thermal screws](./img/thermal-screws.webp)

4. Unplug the two fan connectors from the motherboard (highlighted red above).
5. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste from the CPU chips, GPU chip, and surrounding components, as well as the corresponding points on the heat sink. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.
    - Some thermal paste may already be on the motherboard around the VRAM chips, or may get onto the motherboard while cleaning the paste off of the chips. Thermal paste is typically not conductive; it's safer to leave excess paste on the board than to risk damaging the board with rough removal.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. Apply a small line of thermal paste directly onto both CPU chips, the GPU chip, the three Samsung VRAM chips, and the twelve `R15` chips.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the silver heatsink and fan screws, starting with #1, then #2, and so on until #12.
10. Plug the two white fan connectors back into the motherboard.

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the speaker wire from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Speaker screws and connectors](./img/speakers.webp)

3. Unscrew the speaker screws and lift the speaker out of the machine.
    - The right speaker has three screws; the left speaker has two screws.
    - The speaker wire may be partially routed through channels in the chassis; be careful when removing it.
4. Place the new speaker in the machine, plug in the connector, replace the screws, and reinstall the bottom panel.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

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