# Lemur Pro (Parts & Repairs)

Many components in your Lemur Pro can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the speakers](#replacing-the-speakers)
- [Replacing the main battery](#replacing-the-main-battery)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  
**Screws:** 12 total

### Steps to remove the bottom cover:

1. Place the Lemur Pro lid-side down.
2. Remove the 12 screws from the bottom panel.

![Bottom case screws](./img/bottom-screws.jpg)

3. Lift the bottom cover off, starting from the hinges and working towards the front.

## Replacing the RAM

The Lemur Pro 10 comes with 8GB of RAM soldered onto the motherboard, which cannot be replaced. There is an additional RAM slot, which can support up to a 32GB stick for 40GB of RAM total. The additional stick is a standard DDR4 SO-DIMM running at 3200 MHz.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM tabs](./img/ram-tabs.jpg)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. SSD-1 supports PCIe NVMe Gen 4 and SSD-2 supports SATA III or PCIe NVMe Generation 3.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the M.2 drives (or slots.) The SSD-1 slot is above the battery (highlighted yellow here), while the SSD-2 slot is next to the battery (highlighted green).

![M.2 slots](./img/m2-slots.jpg)

3. Unscrew the retainer screw opposite the M.2 slot.
4. Remove the existing M.2 drive by pulling it out of the slot.
5. Insert the new M.2 drive into the slot and hold it down.
6. Replace the retainer screw.

## Replacing the cooling system:

If the CPU fan becomes noisy and cleaning it out doesn't fix the issue, you may need a new CPU fan. Contact Support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 20 minutes    
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the small connector plugging the fan into the motherboard, highlighted yellow below.

![Heatsink/fan screws](./img/thermal-system.jpg)

4. Remove the two fan screws (highlighted red above) and any clear tape holding the fan in place.
5. Remove the heatsink screws in reverse order, starting with #3, then #2, and finally #1.
6. Remove the heatsink/fan from the system, being careful not to bend the heatsink pipe. It may take some pressure to break the seal of the thermal paste.
7. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol to remove excess or difficult-to-remove paste.

![Thermal paste removal](./img/thermal-paste-removal.webp)

8. After cleaning the CPU and heatsink, apply a small line of thermal paste directly onto the CPU.

![Thermal paste application](./img/thermal-paste-application.jpg)

9. Carefully replace the fan and heat sink.
10. Replace the heatsink screws, starting with #1, then #2, and finally #3.
11. Replace the fan screws and plug the fan back in.
    - When plugging the fan in, the black wire goes on the left (closest to the side of the machine.)

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Follow the steps above to [remove the primary SSD](#replacing-an-m2nvme-ssd).
3. Remove any clear tape that is securing the battery, then pull the battery away from the adhesive holding it to the case.
    - If you are only clearing the CMOS and are not replacing the CMOS battery, removing the SSD and CMOS battery is optional, but will make it easier to unplug the CMOS battery connector.

![CMOS battery](./img/cmos-battery.jpg)

4. Unplug the white connector attaching the CMOS battery to the motherboard.
5. To clear the CMOS, [disconnect the main battery](#replacing-the-main-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
6. Re-connect the CMOS battery and main battery, and replace the M.2 drive and bottom panel.
7. Power up the machine. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the wireless card:

Your system's WiFi and Bluetooth are both handled by the same module. It connects with a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless card (next to the CPU fan.) Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.jpg)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fitting and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the speaker wire from the motherboard.
    - This can also be done after freeing the speaker.

![Speaker wires and tabs](./img/speakers.webp)

3. Pull the tops of the purple rubber circles over the black tabs holding them in place.
4. Lift the speaker up and off of the plastic posts.

![Speaker removal](./img/speaker-removal.webp)

5. Slide the new speaker onto the plastic posts and connect it to the motherboard.

## Replacing the main battery:

The battery provides primary power whenever the system is unplugged.

**CAUTION:** Do not use metal tools to remove the battery. Do not touch the battery contacts with your hands or metal objects. If the battery is damaged during repairs, do not reinsert it into the laptop. Do not continue to use the computer if it contains a damaged battery. It is a potential fire hazard to operate a computer with a damaged battery. Keep children away from, and properly dispose of, the damaged battery. Always dispose of batteries carefully, by placing a piece of tape on the contact points. Take damaged batteries to an electronics recycling center and contact System76 to purchase a replacement. Batteries may explode or leak if exposed to fire, or if improperly handled or discarded. Only use batteries designed for your specific computer. The product that you have purchased contains a rechargeable battery. The battery is recyclable. At the end of its useful life, under various state and local laws, it may be illegal to dispose of this battery into the municipal waste stream. Check with your local solid waste officials for details in your area for recycling options or proper disposal.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 20 minutes    
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the main battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector that connects the battery to the motherboard.

![Main battery](./img/battery.jpg)

3. Remove the battery. The battery is secured with tape, which can be pulled off. The tabs around the battery will also need to be held back for the battery to come out.
4. Put the battery back (or put your new battery in its place) and plug it back into the motherboard.
