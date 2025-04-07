const itemLocations = {
  "16x2 lcd display": "A1S1L",
  "micro servo 9g": "A1S1L",
  "micro servo mg 90s": "A1S1L",
  "dc mini motor": "A1S1L",
  "8 channel IR Sensor array module": "A1S1L",
  "PCB Lubang IC 9x15 CM": "A1S1L",
  "7x9cm Single Side Copper Plate Perf Board for PCB Prototype": "A1S1L",
  "4x4 Matrix Keypad": "A1S1L",
  "HC-SR04 Ultrasonic Distance Sensor": "A1S1R",
  "KY-023 Joystick": "A1S1R",
  "Uxcell Adjust IR Pyroelectric PIR Motion Sensor Detector Module Hc-sr501": "A1S1R",
  "USB 2.0 A Male to B Male": "A1S2L",
  "AZDelivery 4 Digits 7 Segment Digital Tube TM1637 LED Display Module": "A1S1R",
  "led 3v": "A1S1R",
  "5V 1 Channel Relay Module": "A2S2R",
  "TTP223 Capacitive Touch Sensor Module": "A1S2R",
  "Arduino Uno": "A1S3L",
  "MB-102 Breadboard": "A1S1R",
  "8x8 LED dot matrix display module": "A1S2R",
  "connecting clip red": "A1S2L",
  "KY-022 VS1838B TL1838 IR Empfänger Receiver Modul": "A1S2L",
  "Berg strip": "A1S1R",
  "connecting clip black": "A1S2R",
  "LDR Sensor": "A1S2R",
  "ardino nano": "A1S1R",
  "esp8266": "A1S2R",
  "ISD1760 Voice Recording Module": "A1S2L",
  "buzzer small": "A1S2R",
  "tic tic switch": "A1S2R",
  "ir sensor": "A1S2R",
  "male pin header": "A1S2R",
  "steel belt laceing 3mm": "A1S2R",
  "ADXL335 Accelerometer Angle Sensor Module": "A1S2R",
  "LM393 Interfacing Sound Sensor": "A1S2R",
  "servo motor tester": "A1S4L",
  "resisters": "A1S6R",
  "Gear motor": "A1S5L",
  "em-18reader module": "A1S4L",
  "Ttp224 4-Way Capacitive Touch Switch Module": "A1S4L",
  "humidity sensor module": "A1S4L",
  "servo mg995": "A1S5L",
  "Ublox NEO-6M GPS Module": "A1S4L",
  "GSM MODULE": "A1S4L",
  "Arduino uno without chip": "A1S4R",
  "Bluetooth module": "A1S4L",
  "Rndmfg LED Module": "A1S4L",
  "copper wire": "A1S4L",
  "dc 3v mini motor 3mm": "A1S4L",
  "rfid reader": "A1S4R",
  "Raindrop Sensor Module": "A1S4R",
  "bread board 400 pin": "A1S5L",
  "usb to Micro usb cable": "A1S3L",
  "Uno Proto Shield": "A1S4R",
  "power bank": "A1S3R",
  "LDR Sensor with relay circuit": "A1S4L",
  "ULN2003": "A1S4R",
  "jumber wire": "A1S3R",
  "TTP226 8 Channel Digital Capacitive Touch Sensor Module": "A1S4R",
  "chip box (containes many chip)": "A1S5R",
  "piezo buzzer component": "A1S4L",
  "lego charger connector": "A1S3R",
  "moisturizer sensor": "A1S4L",
  "buzzer big": "A1S5R",
  "MQ-4": "A1S2R",
  "nfc chip": "A1S4L",
  "adapter 5,9,12": "A1S6L",
  "5V 2 Channel Relay Module": "A1S2L",
  "battery 3.7v": "A1S2L",
  "water flow sensor": "A1S4L",
  "GY-291 ADXL345 Digital 3-Axis Acceleration of Gravity Tilt Module": "A1S4L",
  "9v battery no charge": "A1S5R",
  "9v battery with charge": "A1S5R",
  "temprature sensor module": "A1S4L",
  "HX-2S-D20 7.4V 18650 Lithium Battery Protection Plate": "A1S4L",
  "buzzer not working": "A1S5L",
  "Stanley 0-83-033 Max Steel C-Clamp": "TA1",
  "male to female jumber wire": "A1S3L",
  "jumber wire male to male": "A1S3L",
  "female to female jumber wire": "A1S3L",
  "electronic digital caliper": "A2S2L",
  "spanner": "TA1",
  "Multimeter": "A2S2L",
  "Stanley Classic Box Level": "TA1",
  "Crescent Wrench": "TA1",
  "Stanley 84-213 Wire Stripper & Cutter": "TA1",
  "paper microscope": "A1S1R",
  "lengi many tipe": "TA1",
  "digital voltage tester": "TA1",
  "cutting plare": "TA1",
  "Wire Stripper": "TA1",
  "soil testing kit": "A2S1L",
  "blood group determination kit": "A2S1L",
  "Metal Hack Saw big": "TA1",
  "Hack Saw blade": "TA1",
  "Metal Hack Saw small": "TA1",
  "Stanley 5m Tape Measure": "TA1",
  "plain slides": "A2S1L",
  "Skil 30 piece Ratcheting Screw Driver Set (Red and Black)": "TA1",
  "cover glass microscope": "A2S1R",
  "wood piece": "A2S1L",
  "computer power cable": "A1S6L",
  "changer block adapter": "A1S6L",
  "glouse": "A2S4R",
  "protection glass": "A2S4L",
  "telescope small": "A2S1R",
  "At mega chip": "A1S2R",
  "Cable tye": "A2S5L",
  "Gear motor 12v": "A1S5L",
  "12 v Motor": "A1S5L",
  "First aid kit": "A2S5L",
  "Stanley Screwdriver Set 66-039": "A2S3L",
  "Drilling machine": "TA2",
  "3D pen": "A2S2R",
  "Dc charging cables": "A2S6L",
  "Glue stick": "A1S1L",
  "Extra wire": "A2S6R",
  "Tyre": "A1S3R",
  "Dremel pendrive": "A1S1R",
  "Hand drill": "TA2",
  "Bulb holder": "A2S6L",
  "Wire with plug": "A2S6L",
  "Hammer": "TA1",
  "Bosh tool kit": "TA2",
  "Micro usb lego": "A2S6L",
  "Tread": "A2S6R",
  "Stanley Screw drive kit": "TA1",
  "C clamb": "TA1",
  "Stanley circlip plier set": "TA1",
  "Extra items": "A1S5R",
  "Soldering Iron Stand": "TA2",
  "Scissors": "TA1",
  "Glue gun (not working)": "TA2",
  "Mouse": "A2S3L",
  "Wire cpu power wire": "A2S6L",
  "JIGOV Proximity Sensor": "A2S6L",
  "Force Sensor": "A1S1R",
  "Extension board": "A2S5R",
  "Copper wire (with out cover)": "A2S6R",
  "Monitor": "CA1",
  "Keyboard": "A2S3L",
  "Driller bit set": "TA1",
  "Laptop": "A2S3L",
  "Soldering iron": "TA2",
  "Heater": "TA2"
};

$("#findForm").submit((e) => {
  e.preventDefault();

  // Get selected items
  const item1 = $("#item1").val();
  const item2 = $("#item2").val();
  const item3 = $("#item3").val();

  // Validate selections
  if (!item1) {
    alert("Please select all items.");
    return;
  }

  // Get locations
  const location1 = itemLocations[item1] || "Unknown";
  const location2 = itemLocations[item2] || "Unknown";
  const location3 = itemLocations[item3] || "Unknown";

  // Submit the form via AJAX
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzHFd8NiDfzaI50NHXBsZypUtpAEgM5CZ1g67H0T0KDa-bEaiBEwpV9eJtJrye2nc2C/exec",
    data: $("#findForm").serialize(),
    method: "POST",
    success: function (response) {
      // Display item locations on success
      alert(
        `Item Locations:\n\n1. ${item1}: ${location1}\n2. ${item2}: ${location2}\n3. ${item3}: ${location3}\n After the usage take it back as the place !!!`
      );
      window.location.reload(); // Optional: Reload the page after submission
    },
    error: function (err) {
      alert("Something went wrong while submitting the form.");
    }
  });
});

console.log(`Item Locator plugin found!!!`);