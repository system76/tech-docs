# Oryx Pro (Parts & Repairs)

Many components in your Oryx Pro can be upgraded or replaced as necessary. This page uses photos of the 17" model, but screw counts, general component locations, and other details are the same on the 15" model unless otherwise noted.

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
2. Remove the 16 bottom panel screws.
    - On the 15" model, the two back corner screws are longer than the rest (highlighted red below.) CHECK
    - On the 17" model, all screws are the same length.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from the hinges in the back.

## Replacing the RAM:

The Oryx Pro 9 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

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

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. Both slots support PCIe NVMe Generation 4 only.

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

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the three silver battery screws along the top of the battery.
3. The battery is held in by three of the bottom panel screws and two additional screws, one of which is underneath the M.2 SSD. Remove the two final screws, highlighted red below.

![Battery screws](./img/battery.webp)

4. Unplug the white connector (highlighted yellow above) connecting the battery to the motherboard.
5. Remove the battery, starting from the top edge with screw holes.
6. When putting in the new battery, start with the plastic tabs along the bottom edge (opposite from the screw holes.)
5. When plugging in the new battery, the red wire on the connector goes on the left, and the black wire goes on the right.

## Replacing the wireless card:

Your Oryx Pro's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove both SSDs](#replacing-an-m2nvme-ssd).
    - Removing the outermost SSD is optional, but will make it easier to work with the wireless card.
2. Locate the wireless module. Remove any clear tape that is securing the wires.

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

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover), [remove both SSDs](#replacing-an-m2nvme-ssd), and [remove the wireless card](#replacing-the-wireless-card).
    - If you are not replacing the CMOS battery, then removing the wireless card is optional.
2. If necessary, remove any components that are covering the CMOS battery:
    - For the 15" model, [remove the M.2 SSD closest to the main battery](#replacing-an-m2nvme-ssd) and [remove the main battery](#replacing-the-battery).
    - For the 17" model, [remove both M.2 SSDs](#replacing-an-m2nvme-ssd). check

![CMOS battery](./img/cmos-battery.webp)

3. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, gently pull from the sides to pry it up from where it's stuck to the case.
4. To clear the CMOS, [disconnect the main battery](#replacing-the-battery) (if it's still installed), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery, [replace the main battery](#replacing-the-battery), and [replace the M.2 SSD](#replacing-an-m2nvme-ssd).
6. Replace the bottom panel and power up the Oryx Pro. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

If the CPU/GPU fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan.

The Oryx Pro 9 comes with heat-conductive metal on the dedicated GPU die and the main CPU die, and uses regular thermal paste for the integrated GPU die. These materials help facilitate effective heat transfer between the CPU/GPU and the cooling equipment.

- Thermal paste should generally be replaced after removing the heatsink; thermal paste also dries over time, so depending on your climate and the age of the machine, applying new thermal paste may increase thermal performance.
- The heat-conductive metal does not dry out, and replacing it is optional; replacement may be useful if the previous metal has flowed out of the proper area for cooling.

Replacement heat-conductive metal fitted to the machine and replacement fans can be obtained by [contacting support](https://support.system76.com).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Power off the machine. Wait 20 minutes for the machine to cool down to room temperature.
    - **Warning:** Removing the heatsink before the machine has cooled to room temperature may result in heat-conductive metal flowing onto the motherboard and causing irrepairable damage.
2. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
3. Unscrew the fan and heatsink screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #12.
    - The screws are held captive and will not come out of the fans/heatsink. The fan screws will click when they are fully loosened.
    - The order for the 17" model is shown below; the screws are numbered differently on the 15" model. Follow the order stamped into the heatsink metal.
    - Do not remove the smaller screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-screws.webp)

4. If there is any clear tape securing the heatsink/fans or the fan wires, remove it.
5. Unplug the two white fan connectors from the motherboard (highlighted red above).
6. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
7. Using a paper towel, remove the existing thermal paste from the integrated CPU die, the border of the CPU chip, the CPU heatsink, the border of the GPU die, and the GPU heatsink.
    - A small amount of rubbing alcohol can be used if the old paste is dried or difficult to remove.
    - The heat-conductive metal may have some holes where pieces stuck to the die or heatsink.
    - If you are not replacing the heat-conductive metal, do not pick or wipe the heat-conductive metal off of the main CPU die or the GPU heatsink.

![Thermal paste removal](./img/thermal-paste-removal.webp)

8. If you are replacing the heat-conductive metal, remove the plastic covers from the GPU heatsink and the CPU chip.
    - A fingernail or a thin plastic tool can be used to pick a side of the plastic cover up from the CPU chip/GPU heatsink.
    - **Warning:** The heat-conductive metal is electrically conductive. Be careful not to get specks of heat-conductive metal onto the motherboard. The heat-conductive metal can cause the motherboard to malfunction or fail if it makes contact.
    - After removing the plastic covers, wipe away any remaining heat-conductive metal residue from the heatsink, dedicated GPU die, and main CPU die.
    - Some adhesive residue may remain on the GPU heatsink and CPU chip.

![Heat-conductive metal removal](./img/heat-conductive-metal-removal.webp)

9. Apply the new heat-conductive metal to the CPU chip and the GPU heatsink, matching the orientation of the plastic coverings with the diagonal corners of their respective surfaces.
    - **Warning:** Replacement heat-conductive metal obtained from System76 will include the plastic covering. If you are applying third-party heat-conductive or liquid metal, clean and reuse the plastic covering from the stock heat-conductive metal to prevent the aftermarket metal from flowing onto the motherboard when heated.

![Loose heat-conductive metal](./img/heat-conductive-metal-loose.webp)

_**Above:** Heat-conductive metal for the CPU (left) and the GPU (right)._    
_**Below:** Heat-conductive metal application on the CPU chip and the GPU heatsink._

![CPU heat-conductive metal application](./img/heat-conductive-metal-application-cpu.webp)

![CPU heat-conductive metal application](./img/heat-conductive-metal-application-gpu.webp)

10. Apply a small line of thermal paste directly onto the integrated GPU die (the smaller die on the CPU chip).

![Thermal paste application](./img/thermal-paste-application.webp)

11. Apply a line of thermal paste around the border of the CPU chip and the border of the GPU die.
    - The purpose of this border is to further prevent melted heat-conductive metal from flowing onto the motherboard during operation.
    - Keep the nozzle of the thermal paste tube pressed against the surface of the chip; dispense the thermal paste slowly while moving the nozzle.
    - Be careful not to apply too much thermal paste. Only a thin layer is needed.

![Thermal paste border](./img/thermal-paste-borders.webp)

12. Carefully replace the heatsink.
13. Tighten the fan and heatsink screws, starting with #1, then #2, and so on until #12.
14. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

**Tools required:** Cross-head (Phillips) screwdriver, tweezers (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the keyboard adhesive strip near the right fan.
    - The end of the adhesive strip may extend out of the adhesive access rectangle.

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
