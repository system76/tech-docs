# Lemur Pro (Parts & Repairs)

Many components in your Lemur Pro can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
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

![Bottom case screws](./img/bottom-case-screws.jpg)

3. Lift the bottom cover off, starting from the hinges and working towards the front.

## Replacing the RAM

The Lemur Pro 9 comes with 8GB of RAM soldered onto the motherboard, which cannot be replaced. There is an additional RAM slot, which can support up to a 32GB stick for 40GB of RAM total. If you're purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM tabs](./img/ram-tabs.jpg)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280, and both slots support SATA III or PCIe NVMe Generation 3.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the M.2 drives (or slots.) The primary slot is next to the battery (highlighted yellow here), while the secondary slot is above the battery (highlighted red).

![M.2 slots](./img/m2-slots.jpg)

3. Unscrew the retainer screw opposite the M.2 slot.

![M.2 screws](./img/m2-screws.jpg)

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
2. Locate the CPU heatsink screws (highlighted yellow here) as well as the fan connector and screws (highlighted in red).

![Heatsink/fan screws](./img/heatsink-fan.jpg)

3. Disconnect the small connector plugging the fan into the motherboard.
4. Remove the heatsink screws in reverse order, starting with #3, then #2, and finally #1.
5. Remove the screws holding the fan onto the case.
6. Carefully remove the heatsink/fans from the case.
7. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol to remove excess or difficult-to-remove paste.
8. After cleaning the CPU and heatsink, apply a small line of thermal paste directly onto the CPU.
9. Carefully replace the fan and heat sink.
10. Replace the heatsink screws, starting with #1, then #2, and finally #3. Also replace the fan screws. Do not fully tighten until all screws are in place.
11. Plug the fan back in.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the comptuer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Follow the steps above to [remove the primary SSD](#replacing-an-m2nvme-ssd); the CMOS battery is located underneath this SSD.

![CMOS battery](./img/cmos.jpg)

3. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, use a thin plastic tool to pry the battery up from where it's stuck to the case.
4. [Disconnect the main internal battery](#replacing-the-main-battery), then hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery as well as the main internal battery.
6. Power up the Lemur Pro. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the wireless card

Your system's WiFi and Bluetooth are both handled by the same module. It connects with a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the WiFi/Bluetooth module

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless card (next to the CPU fan.) Remove any tape if present.

![Wireless card](./img/wireless-card.jpg)

3. Gently remove the two antennas by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot.
5. Remove the wireless card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fitting and pressing onto the wireless card. The connector will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the main battery

The battery provides primary power whenever the system is unplugged.

**CAUTION:** Do not use metal tools to remove the battery. Do not touch the battery contacts with your hands or metal objects. If the battery is damaged during repairs, do not reinsert it into the laptop. Do not continue to use the computer if it contains a damaged battery. It is a potential fire hazard to operate a computer with a damaged battery. Keep children away from, and properly dispose of, the damaged battery. Always dispose of batteries carefully, by placing a piece of tape on the contact points. Take damaged batteries to an electronics recycling center and contact System76 to purchase a replacement. Batteries may explode or leak if exposed to fire, or if improperly handled or discarded. Only use batteries designed for your specific computer. The product that you have purchased contains a rechargeable battery. The battery is recyclable. At the end of its useful life, under various state and local laws, it may be illegal to dispose of this battery into the municipal waste stream. Check with your local solid waste officials for details in your area for recycling options or proper disposal.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the main battery

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector that connects the battery to the motherboard.

![Main battery](./img/battery.jpg)

3. Remove the battery. The battery is secured with tape, which can be pulled off. The tabs around the battery will also need to be held back for the battery to come out.
4. Put the battery back (or put your new battery in its place) and plug it back into the motherboard.
