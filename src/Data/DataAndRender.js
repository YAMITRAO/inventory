
import InventoryDetails from "./InventoryDetails/inventoryDeatils";
import InventoryItems from "./InventoryItems/InventoryItems";
import { useState } from "react";



function DataAndRender(){

    let dataFile = [

      // {
      //   name : "",
      //   initial_quantity: ,
      //   available_Quantity: ,
      //   path: { 
      //     backgroundImage: `url("")`,
           
      //   },
      // },

        {
          name : "Arduino Heloo",
          initial_quantity: 30,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/90H422vy/arduino-uno-copy.jpg")`,
             
          },
          category:"Microcontroller",
          package:"P1",
        },
        {
          name : "Arduino Nano",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/t4kKmXj1/arduino-nano.webp")`,
             
          },
          category:"Microcontroller",
          package:"P1",
        },

        {
          name : "Arduino Mega",
          initial_quantity: 10,
          available_Quantity: {
            sku01: 5,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/q779P9J1/arduino-mega.webp")`,
             
          },
          category:"Microcontroller",
          package:"P1",

        },

        {
          name : "Raspberry Pi 3 B+",
          initial_quantity: 5,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/L8h8k6P7/respberry-Pi.jpg")`,
             
          },
          category:"Microcontroller",
          package:"P1"
        },

        {
          name : "BreadBoard Mini 400 pts",
          initial_quantity:30 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/t4V9B9Gt/bread-Board-Mini.jpg")`,
             
          },
          category:"Prototype",
          package:"P1"
        },
        {
          name : "BreadBoard Mini 800 pts",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 10,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/7Y5Cy8yb/bread-Board800pts.jpg")`,
             
          },
          category:"Prototype",
          package:"P1"
        },

        {
          name : "Uno Proto Shield",
          initial_quantity: 20,
          available_Quantity: {
            sku01: 13,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/LX7T3dd7/proto-Shield.jpg")`,
             
          },
          category:"Prototype",
          package:"P1"
        },

        {
          name : "PCB 140*90mm",
          initial_quantity: 30,
          available_Quantity: {
            sku01: 15,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9QmcjKSs/pcb-140-90mm.png")`,
             
          },
          category:"Development",
          package:"P1"
        },

        {
          name : "PCB 80*55mm",
          initial_quantity: 30,
          available_Quantity: {
            sku01: 15,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/5yr8M89R/smallpcb.webp")`,
             
          },
          category:"Development",
          package:"P1"
        },

        {
          name : "Berg Strip Female",
          initial_quantity: 30,
          available_Quantity: {
            sku01: 15,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/gksxqTTw/female-Berg.jpg")`,
             
          },
          category:"Development",
          package:"P1",
        },

        {
          name : "Berg Strip Male",
          initial_quantity: 30,
          available_Quantity: {
            sku01: 15,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/mZK0wJB7/maleBerg.webp")`,
             
          },
          category:"Development",
          package:"P1"
        },

        {
          name : "Display 16*2",
          initial_quantity: 20,
          available_Quantity: {
            sku01: 11,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/fyhVBnsd/16-2display.jpg")`,
             
          },
          category:"Display",
          package:"P1"
        },

        {
          name : "USB Cables A-B",
          initial_quantity: 20,
          available_Quantity: {
            sku01: 16,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/1RcXsdPW/usb-a-b.jpg")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "USB Cables A-Mini",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 9,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/jdx55hSR/usb-a-mini.jpg")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "Battery Li-ion",
          initial_quantity:30 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/rpHKFnVJ/battery.webp")`,
             
          },
          category:"Power",
          package:"P1"
        },


        {
          name : "Resistor Kit",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 10,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/FHk9Wm5V/resistor-copy.jpg")`,
             
          },
          category:"Ic&Component",
          package:"P1"
        },

        {
          name : "Capacitor Kit",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 18,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/wBZCPszW/capacitor-copy.jpg")`,
             
          },
          category:"Ic&Component",
          package:"P1"
        },

        {
          name : "Voltage Regulator IC",
          initial_quantity:30 ,
          available_Quantity: {
            sku01: 14,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/cHjb9Kqs/voltage-Regulator.jpg")`,
             
          },
          category:"Ic&Component",
          package:"P1"
          
        },

        {
          name : "Water Pump Module",
          initial_quantity:4 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/HnN87g7v/waterpumpmodule.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Piezoelectric Plate",
          initial_quantity:30 ,
          available_Quantity: {
            sku01: 21,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/k4GsBNxQ/pizeelectric.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name :  "8*8 Matrix module",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/FF8pHnDG/8-8.webp")`,
             
          },
          category:"Display",
          package:"P1"
        },

        {
          name : "Bluetooth Module",
          initial_quantity:15 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/dQyHrY7g/hc05.webp")`,
             
          },
          category:"Communication",
          package:"P1"
        },

        {
          name : "7-Segment Display",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 12,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/KjG1GbC4/7segment.jpg")`,
             
          },
          category:"Display",
          package:"P1"
        },

        {
          name : "GSM",
          initial_quantity:4 ,
          available_Quantity: {
            sku01: 2,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/ZnNJzM50/sim800.jpg")`,
             
          },
          category:"Communication",
          package:"P1"
        },

        {
          name : "GPS",
          initial_quantity:4 ,
          available_Quantity: {
            sku01: 2,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Kj1w6kQN/gps.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Laser Diode",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9XBB2FsP/laser-Diode.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "LDR Module",
          initial_quantity:30 ,
          available_Quantity: {
            sku01: 15,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/W10zRtHT/ldr-module.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Keypad",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/HnGWPg9V/keypad.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Joystick",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/FRVCwbj3/joystick.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Active Buzzer",
          initial_quantity:40 ,
          available_Quantity: {
            sku01: 25,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/MpwC3TkC/active-Buzzer-Small-copy.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Active Buzzer Big",
          initial_quantity:40 ,
          available_Quantity: {
            sku01: 28,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/7LnYtcQV/active-Buzzer-Big-copy.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "L293D Motor Driver",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/FzMYXSbg/l293d.png")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Sound Playback",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/wMcVJ2j3/soundplayback.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "BO Gear Motor",
          initial_quantity:40 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/3xfwjf96/bogearmotor.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "ESP8266 MCU",
          initial_quantity:6 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/zv9m7MVz/esp8266.webp")`,
             
          },
          category:"Microcontroller",
          package:"P1"
        },

        {
          name : "We Mos D1 R2",
          initial_quantity:6 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/zfp818d3/wemos.jpg")`,
             
          },
          category:"Microcontroller",
          package:"P1"
        },

        {
          name : "Vibrating Motor",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/JzJH7tgT/vibratingmotor.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Aligator Connector",
          initial_quantity:200,
          available_Quantity: {
            sku01: 167,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/nzfy8SmR/alligator-connector.webp")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "Battery Clips",
          initial_quantity:40,
          available_Quantity: {
            sku01: 25,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/wMRg5fC9/dcjack-copy.jpg")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "Hook-up Wires",
          initial_quantity:4 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/3NNCtp18/hookup-wires.webp")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "Jumper M-M",
          initial_quantity:1000 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/tgC4850H/mtom.jpg")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "Jumper M-F ",
          initial_quantity:600 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/t4Rbg4B3/male-to-female.webp")`,
             
          },
          category:"Cables",
          package:"P1"
        },
        
        {
          name : "Jumper F-F",
          initial_quantity:400 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/0j9WCbMZ/female-to-female.jpg")`,
             
          },
          category:"Cables",
          package:"P1"
        },

        {
          name : "RGB LEDs",
          initial_quantity:400 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/7hvVBb5j/rgbled.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },


        {
          name : "LEDs(Red)",
          initial_quantity:1000 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/j5gVMkqN/redled.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "LEDs(Green)",
          initial_quantity:1000 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/gJbssnXQ/greenled.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "LEDs(Blue)",
          initial_quantity:1000 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Nfpwnrc3/blueled-copy.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },
        {
          name : "Led Yellow",
          initial_quantity:1000 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/mrB0BGtC/yellowled.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        
        },

        {
          name : "LEDs(White)",
          initial_quantity:1000 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/3xx9Lk8b/whiteLed.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "LM555 Timer IC",
          initial_quantity:30 ,
          available_Quantity: {
            sku01: 25,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/qRJ87YND/ne555.jpg")`,
             
          },
          category:"Ic&Component",
          package:"P1"
        },

        {
          name : "Atmega 16u2",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/JhGsdLBL/atmega16u2.jpg")`,
             
          },
          category:"Ic&Component",
          package:"P1"
        },

        {
          name : "Diode & Transistor Kit",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/zB0FxfYk/TRANSISTOR-copy.jpg")`,
             
          },
          category:"IC&Component",
          package:"P1"
        },

        {
          name : "Button Switch Set",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/90kSNbH1/button-Switch-Set-copy.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MPR121",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 14,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/fL9BRNG7/MPR121.png")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Capacitive Switch",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 5,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SR430RnY/capacitive-Switch.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "IR sensor Module",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/4y5JqrxZ/irsensor.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "3-Axis Accelerometer",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/L4N5y1YP/3-axis-accelerometer.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Humidity Sensor",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 7,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/85d48HQN/dht22.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ2",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 2,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/d1fLQ7M3/mq2.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ3",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/wjtHHWqX/mq3.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ4",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/C1Wnv5s3/mq4.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ5",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/zDPC9D0P/mq5-copy.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ6",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/025VR2gT/mq6.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ7",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/RV3nnjw3/mq7.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ8",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/VNSY78LM/mq8.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "MQ135",
          initial_quantity:3 ,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Pr3s0R7M/mq135.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "IR receiver",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 4,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/g2yYQDvc/irreceiver.jpg")`,
             
          },
          category:"Communication",
          package:"P1"
        },

        {
          name : "UltraSonic",
          initial_quantity:40 ,
          available_Quantity: {
            sku01: 16,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Y23njmMn/hcsr04-copy.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "3-Axis Gyroscope",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9MzSydVY/gyro.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "PIR motion detector",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 13,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/pT8QNrBt/pir.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Pulse Rate Sensor",
          initial_quantity:4 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/RhhM66pk/pulse-Rate.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Relay Module Single",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 8,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/v85Rhvf0/relaysingle-copy.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Relay Module Double",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 11,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/vTZW4hsG/relaydouble.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "MicroPhone Module",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/W4X28wZD/microphone.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Soil Moisture Sensor",
          initial_quantity:6 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/XNkZbS8G/soilmos.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Touch Sensor",
          initial_quantity:6,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/6qggP1y9/touchswitch.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Metal Touch",
          initial_quantity:6,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/sxYHnDdJ/metaltouch.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Rain Drop Sensor",
          initial_quantity:6 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/fLTbWk5V/rain-drop.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Flex Sensor",
          initial_quantity:6,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/76Vm7tgB/flexsensor.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Temperature Sensor",
          initial_quantity:6,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/KvMF7tHP/lm35.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "DHT11 Humi and temp",
          initial_quantity:40 ,
          available_Quantity: {
            sku01: 28,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/wBTDsxjm/dht11.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Force Presure Sensor",
          initial_quantity:4,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9QK5S0wd/forcepressure.webp")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Color Recognition Sensor",
          initial_quantity:4,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/JnVw7h8b/colorsensor.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Water Flow Sensor",
          initial_quantity:4,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/4NZ97vP0/water-Flow-Sensor.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Sound Sensor",
          initial_quantity:10,
          available_Quantity: {
            sku01: 12,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/W4X28wZD/microphone.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "IR Array Module",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 8,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/xC3btcT5/irarray.png")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "Power Bank",
          initial_quantity:5 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/PxDkjw8b/powerbank.jpg")`,
             
          },
          category:"Power",
          package:"P1"
        },

        {
          name : "RFID Reader-Tag",
          initial_quantity:10,
          available_Quantity: {
            sku01:3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/vDFTyyBT/rf-id.jpg")`,
             
          },
          category:"Sensor",
          package:"P1"
        },

        {
          name : "RF 315Mhz",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Z5YB5THv/315mhz.webp")`,
             
          },
          category:"Communication",
          package:"P1"
        },

        {
          name : "Stepper with Driver",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 7,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/xTZDc5yG/stepperwithdriver.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "DC motor",
          initial_quantity:20 ,
          available_Quantity: {
            sku01: 12,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/W38xjw1k/dcmotor.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Servo MG90S",
          initial_quantity:10,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/2Sds2YNG/mg90s.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Servo S3003",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 4,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9FLTTRrY/s3003.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Servo MG995",
          initial_quantity:10,
          available_Quantity: {
            sku01: 8,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/0NcL1CQJ/mg995.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Servo SG90S",
          initial_quantity:40,
          available_Quantity: {
            sku01: 21,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9QS786P4/sg90s.webp")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "BO Motor 150 rpm",
          initial_quantity:10,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Y2nYLL4f/bomotor.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "L298D Motor Driver",
          initial_quantity:10 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/bNnrYZ1v/l298.jpg")`,
             
          },
          category:"Actuator",
          package:"P1"
        },

        {
          name : "Servo Tester",
          initial_quantity:4,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/DzpX3NbG/servo-tester-esc-consistency-checker-ppm-generator-module-800x800.jpg")`,
             
          },
          category:"Ic&Components",
          package:"P1"
        },
    
        {
          name : "Robotics DIY kit",
          initial_quantity:3,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/YSTQmVqH/robo3.webp")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Mechanical Modular Kit",
          initial_quantity:5 ,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SxdnhPzr/mechanical.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Drone Kit",
          initial_quantity:1 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/ZKpSpybv/dronekit.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Aerospace Kit",
          initial_quantity:1,
          available_Quantity: {
            sku01: 0,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/4Ndc3ss0/rcplane.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Automobile Kit",
          initial_quantity:1,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/qR61CysN/2strock.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Bio-Medical Kit",
          initial_quantity:1,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/25pzLRBm/biotechkit.png")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Agri-tech kit",
          initial_quantity:1,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/BZ7q31pd/agri-kit.webp")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Water/Sanitation Kit",
          initial_quantity:1 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/1zNQyWWT/watersenitation.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Bio-Tech Kit",
          initial_quantity:1 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/K8yD84v5/biomedical.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },

        {
          name : "Other STEM Kit",
          initial_quantity:1 ,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/c1K0hLMZ/otherstem.jpg")`,
             
          },
          category:"STEM Kits",
          package:"P1"
        },
      ]

      const dataFileP2 = [
        {
          name : "3D printer",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/qvCYxRdD/3dprinte.png")`,
             
          },
          category:"Rapid Prototyping Tools",
          package:"P2",
        },

        {
          name : "UPS Power BackUp",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/vHDqzBsF/inverter.webp")`,
             
          },
          category:"Rapid Prototyping Tools",
          package:"P2",
        },
        {
          name : "Filament PLA",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/k5FPm4GY/pla.webp")`,
             
          },
          category:"Rapid Prototyping Tools",
          package:"P2",
        },
        {
          name : "CardBoard",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/zff69jmv/card-Board.jpg")`,
             
          },
          category:"Arts and Crafts",
          package:"P2",

        },
        {
          name : "Foam Card Boards",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/1znXyDwR/foam-card-board.jpg")`,
             
          },
          category:"Arts and Crafts",
          package:"P2",
        },
        {
          name : "Spool 20 meters",
          initial_quantity: 0,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/B65KGxfL/spoolroll.jpg")`,
             
          },
          category:"Arts and Crafts",
          package:"P2",
        },
        {
          name : "Rubber Band",
          initial_quantity: 100,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Rh6qZfjL/rubber.jpg")`,
             
          },
          category:"Arts and Crafts",
          package:"P2",
        },
        {
          name : "Popsicle Sticks",
          initial_quantity: 100,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/7YXZ0qk2/popsticks.jpg")`,
             
          },
          category:"Arts and Crafts",
          package:"P2",
        },
        {
          name : "Wool Glue 500ml",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9fPmX2J0/favicol.webp")`,
             
          },
          category:"Arts and Crafts",
          package:"P2",
        },
      ]

      const dataFileP3 = [
        {
          name : "Hacksaw Frame 12\"",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/t4NVKKVN/frame12.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Hacksaw Blades 12\"",
          initial_quantity: 10,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/sxmkdDsR/blades12.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Hacksaw Frame 6\"",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/DyKrRdMF/frame6.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Hacksaw Blades 6\"",
          initial_quantity: 10,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/NjjHwN7h/blades6.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Piler ExternalStraight",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Cx0VZtrt/piler1.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Piler NoseCirclip ",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/4xYp9LK6/plier2.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Piler LongNose",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/mZ6DHb7n/plier3.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Plier MiniCombi",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/MTnGsNS5/plier4.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Plier WireStripping",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/dV3gTYm5/plier5.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Plier BentNose",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/NjvrKscc/plier6.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Plier NeedleNose",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/PrgFNwJ5/piler7.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Tweezers",
          initial_quantity: 12,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/sDrTrRNM/twiz.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Ball Plein Hammer",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/G3JkvTXp/hammer1.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Shaft Claw Hammer",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/V6wJNDQW/hammer2.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "C-Clamp",
          initial_quantity: 4,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/02191bv7/c-clamp.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Allen Key",
          initial_quantity: 10,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/KcDmFm8V/allen.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

      

        {
          name : "Drill Machine Set",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/RV39fNjD/drill.png")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Drill Workstation",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/90mdK3jD/workstation.png")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Spanners",
          initial_quantity: 12,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/sX6xjbhQ/spanners.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Vice Normal",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/1tnXzJcv/vice.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },
        {
          name : "Screw Driver ",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/nrHn82zR/swrew1.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },


        {
          name : "Wrench",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/bNxFSPmt/Wrench.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Wire Stripper",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/6qQcjMgL/Wire-Stripper.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Screw Driver ",
          initial_quantity: 3,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/nz3YDvrs/screw2.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Rotary multitool set",
          initial_quantity: 1,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/BbyzxWb1/Rotary-multitool-set.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Air blower",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/13PzFbqd/Air-blower.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Drill Bit Set",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/hPvsB3jH/Drill-Bit-Set.jpg")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Files 6\"",
          initial_quantity: 6,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/zBX57RSZ/file2.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Files 3\"",
          initial_quantity: 6,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/66f5dtrN/files1.png")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Cutting Mat",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SsDZLnVP/mat.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Storage Drawer",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/W3TNFHfn/Storage-Drawer.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Pegboard",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Ssh6Xmhv/Pegboard.webp")`,
             
          },
          category:"Mechanical Tools",
          package:"P3",
        },

        {
          name : "Hot Glue Gun",
          initial_quantity: 4,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/tRnJTkHn/gluegun.png")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Digital Oscilloscope",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/Tw7b63g8/Digital-Oscilloscope.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Soldering Kit",
          initial_quantity: 4,
          available_Quantity: {
            sku01: 3,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/kXrQXDL9/Soldering-Kit.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Adapters 5V",
          initial_quantity: 10,
          available_Quantity: {
            sku01: 8,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/pVQTzTpP/Adapters5.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Adapters 12V",
          initial_quantity: 10,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/ry9VzPPm/Adapters12v.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Electric SrewDriver ",
          initial_quantity: 1,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/3xwrpFvT/swrewele-copy.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Heat Gun",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/wBym5pmg/Heat-Gun.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Soldering Stand",
          initial_quantity: 4,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/L8k7HcX4/Soldering-Stand.jpg")`,
             
          },
          category:"Electric Tools",
          package:"P3",
        },

        {
          name : "Measuring Tape",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/44WXGFyT/Measuring-Tape.jpg")`,
             
          },
          category:"Measurement Tools",
          package:"P3",
        },

        {
          name : "Steel Rule",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/7LJNHcwt/Steel-Rule.jpg")`,
             
          },
          category:"Measurement Tools",
          package:"P3",
        },

        {
          name : "Vernier Caliper",
          initial_quantity: 2,
          available_Quantity: {
            sku01: 1,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SN7S5N9D/Vernier-Caliper.jpg")`,
             
          },
          category:"Measurement Tools",
          package:"P3",
        },

        {
          name : "Spirit Level",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SN5rBkpY/Spirit-Lvel.jpg")`,
             
          },
          category:"Measurement Tools",
          package:"P3",
        },

        {
          name : "Voltage Tester",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/m2RzhnNp/voltage-Tester.jpg")`,
             
          },
          category:"Measurement Tools",
          package:"P3",
        },

        {
          name : "Multimeter",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/022tDV9Z/multimeter.jpg")`,
             
          },
          category:"Measurement Tools",
          package:"P3",
        },

        {
          name : "Paper Microscope",
          initial_quantity: 5,
          available_Quantity: {
            sku01: 5,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/NMCKVGrK/Paper-Microscope.jpg")`,
             
          },
          category:"Extra Kits",
          package:"P3",
        },

        {
          name : "Telescope",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/DZ3hw9kx/telescope.jpg")`,
             
          },
          category:"Extra Kits",
          package:"P3",
        },

        {
          name : "Sewing Kit",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/9FmLjJSZ/Sewing-Kit.webp")`,
             
          },
          category:"Extra Kits",
          package:"P3",
        },
      ]

      const dataFile4 =[
        {
          name : "Glue Stick",
          initial_quantity: 100,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SswYN9Bb/Glue-Stick.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Nuts and Bolts",
          initial_quantity: 40,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/JzNhjgSg/Nuts-and-Bolts.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Cable Tie Small",
          initial_quantity: 1000,
          available_Quantity: {
            sku01: 900,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/ydmdyGJW/cableties1.webp")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Cable Ties Medium",
          initial_quantity: 1000,
          available_Quantity: {
            sku01: 800,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/kG5mRYK0/cable-Ties2.webp")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Cbale Ties Big",
          initial_quantity: 1000,
          available_Quantity: {
            sku01: 800,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/hvXYqk9t/cableties3.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Sand Papers",
          initial_quantity: 10,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/L4ZdwPvB/Sand-Papers.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Power Board",
          initial_quantity: 5,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/HxX24T45/power-board.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Blub Holder",
          initial_quantity: 10,
          available_Quantity: {
            sku01: 7,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/6Qs4VnHj/bulbholder.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "Wire 20 meters",
          initial_quantity: 1,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/yxnrcVsj/wires.png")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "USB to DC cable",
          initial_quantity: 10,
          available_Quantity: {
            sku01: 5,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/3Jvvkt14/usb.jpg")`,
             
          },
          category:"Accessories",
          package:"P4",
        },

        {
          name : "First Aid kit",
          initial_quantity: 2,
          available_Quantity: {
            sku01: 2,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/SsRG3Wh6/aid.jpg")`,
             
          },
          category:"Safety Equipments",
          package:"P4",
        },

        {
          name : "Fire Extinguisher",
          initial_quantity: 2,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/K8XxYNpY/fire.jpg")`,
             
          },
          category:"Safety Equipments",
          package:"P4",
        },

        {
          name : "Safety Goggles",
          initial_quantity: 30,
          available_Quantity: {
            sku01: 26,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/x1RfFmgT/goo.jpg")`,
             
          },
          category:"Safety Equipments",
          package:"P4",
        },

        {
          name : "Safety Gloves",
          initial_quantity: 10,
          available_Quantity: 0,
          path: { 
            backgroundImage: `url("https://i.postimg.cc/J0kjW8zx/gloves.jpg")`,
             
          },
          category:"Safety Equipments",
          package:"P4",
        },

        {
          name : "Safety Mask",
          initial_quantity: 20,
          available_Quantity: {
            sku01: 6,
            sku02: 0,
            sku03: 0,
            },
          path: { 
            backgroundImage: `url("https://i.postimg.cc/bNPZvkCp/mask.jpg")`,
             
          },
          category:"Safety Equipments",
          package:"P4",
        },

      ]


      

      dataFile = dataFile.concat(dataFileP2, dataFileP3, dataFile4)
      // dataFile = test;


      const [ packageData, setPackageData]  =useState("All");
      // console.log(packageData);
      const [categoryData, setCategoryData] = useState("All");
      // console.log(categoryData)
     


      let data = [];
    
     

      if((packageData === "All" && categoryData === "All")){
        data = [...dataFile]
      }
      else if(packageData  === "All" ){
        data = dataFile.filter( (value) => {
          return value.category === categoryData;
        })
      }
      else if(categoryData === "All"){
        data = dataFile.filter( (value) => {
          return value.package === packageData;
        })
      }
      else{
        data = dataFile.filter( (value) => {
          return value.category === categoryData && value.package === packageData;
        })
        // data=[...filteredArr]

    }

    const [viewStyle, setViewStyle] = useState("Card View");
    const [viewDetails, setViewDetails] = useState({
      filterclass:"filterResult",
    detailclass:"onlyDetails"

    })
    
      // console.log(data);
      

    return(<>
    <div className="viewStyleClass">
      <select onChange={(e) => {
        setViewStyle(e.target.value)

        if(e.target.value == "List View"){
        setViewDetails({
          filterclass:"filterChange",
          detailclass:"detailsChnage"
        })}
        else if(e.target.value == "Card View"){
          setViewDetails({
            filterclass:"filterResult",
            detailclass:"onlyDetails"

          })
        }

      }}>
        
        <option>Card View</option>
        <option>List View</option>
      </select>
    </div>
    {  <InventoryDetails dataToinventoryDetails = {data} 
    onFilterPackage={ (dataBack) => { setPackageData(dataBack)}}
    onFilterCategory={(dataagain) => {setCategoryData(dataagain)}}
    viewdetails ={viewDetails}></InventoryDetails> }

   

    {(data.length > 0) ?  <InventoryItems dataToInventoryItems={data}  viewstyle ={viewStyle}></InventoryItems> : <div className="noDataFound">No Data Found</div>}
   
    </>)
}

export default DataAndRender;