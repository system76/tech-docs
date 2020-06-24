# Gazelle (Parts & Repairs)

Many components in your Lemur Pro can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Replacing the keyboard](#replacing-the-keyboard)
- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the external battery](#replacing-the-external-battery)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)

## Replacing the keyboard:

Keyboard replacement is simple and requires only a cross-head screwdriver.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  
**Screws:** 2 total - 2 x M2 (black)

### Steps to replace the keyboard:

1. Place the Gazelle lid-side down.
2. Remove the 2 keyboard screws, indicated by the small keyboard icons (highlighted yellow below).

![Keyboard screws](./img/keyboard-screws.jpg)

3. Open the Gazelle and place it on its side.
4. Push the screwdriver into the keyboard push point (highlighted cyan above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.jpg)

5. Set the Gazelle down, then pull the keyboard loose, starting from the top side.

![Keyboard removal](./img/keyboard-removal.jpg)

6. Flip the keyboard over onto the trackpad.

![Keyboard ribbons](./img/keyboard-ribbons.jpg)

7. Pull the large ribbon cable out of the connector.
8. The small ribbon cables have latches. Gently pull the latches from both sides and remove the ribbon cables.
9. Remove the keyboard and replace it with the new one.
10. Insert the large ribbon cable into the connector.
11. Seat the small ribbon cables, then apply pressure equally to both sides of the connector to secure.
12. Flip the keyboard over and press the bottom tabs of the keyboard into the case.
13. Secure the keyboard by pressing down on the edges of the keyboard.
14. Flip the Gazelle over.
15. Replace the 2 screws holding the keyboard in place.
16. Boot your Gazelle and confirm the keyboard is operational.

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  
**Screws:** 17 total - 12 x M2 perimeter (black); 2 x M2 keyboard (black); 3 x M2 under-battery (black)

### Steps to remove the bottom cover:

1. Place the Gazelle lid-side down.
2. Remove the external battery.
3. Remove the 13 perimiter screws, 2 keyboard screws, and 3 under-battery screws.

![Bottom panel screws](./img/bottom-panel-screws.jpg)

4. Lift the bottom cover off, starting from the front corners working to the back near the hinges.

## Replacing the RAM:

RAM acts as temporary storage for your computer. More RAM generally provides better performance. If you're purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-removal.jpg)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280, and both slots support SATA III or PCIe NVMe Generation 3.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the M.2 drive (or slot.)

![M.2 slots](./img/m2-slots.jpg)

3. Unscrew the retainer screw opposite the M.2 slot.
4. Remove the existing M.2 drive by pulling it out of the slot.
5. Insert the new M.2 drive into the slot and hold it in place.
6. Replace the retainer screw.

## Replacing the cooling system:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280, and both slots support SATA III or PCIe NVMe Generation 3.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the CPU heatsink screws.
3. Remove the screws, starting with #1, then #2, and continuing until you have removed #11.

![Thermal screws](./img/thermal-screws.jpg)

4. Carefully remove the heatsink/fans from the case.
5. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol to remove excess or difficult-to-remove paste.

![Heatsink](./img/heatsink-removed.jpg)

6. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU and GPU core.

![Thermal paste](./img/thermal-paste.jpg)

7. Carefully replace the heatsink.
8. Replace the screws, starting with #1, then #2, and so on until #11. Do not fully tighten until all of the screws have been started, then fully tighten all screws.

## Replacing the CMOS battery:

The CMOS battery supplies power to the Gazelle's CMOS chip. Changes you make to the UEFI firmware settings and the comptuer's hardware clock are stored on the CMOS. If your Gazelle doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the CMOS battery, which is connected to the motherboard via a red and black wire, between the 2.5" drive bay and the edge of the computer.

![CMOS battery](./img/cmos-battery.jpg)

3. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, use a thin plastic tool to pry the battery up from where it's stuck to the case.
4. Power up the Gazelle. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.
5. Press Enter at the CMOS/UEFI reset message prompts.
6. If the system boots into the BIOS/UEFI setup utility, press F4 to load defaults, then F10 to save and resume normal boot.

## Replacing the external battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the CMOS battery:

1. Slide the locks that hold the battery to their unlocked positions. (One lock will click into place, while the other is on a spring.)
2. Hold back the spring-loaded lock while removing the battery.
3. Replace the battery/insert the new battery, then slide the clicking lock to its locked position.

## Replacing the wireless card:

Your Gazelle's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless module.

![Wireless card](./img/wireless-card.jpg)

3. Gently remove the two antennas by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot.
5. Remove the wireless card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fitting and pressing onto the wireless card. The connector will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._
