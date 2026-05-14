<h1 align="center">Pratik Suryawanshi</h1>
<h3 align="center">Embedded Systems Architect | RTOS & Hardware-in-the-Loop | Bare-Metal Edge</h3>

<p align="center">
  <i>Architecting deterministic, safety-critical communication across the hardware-software boundary.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/OS-QNX_|_Apache_NuttX_|_FreeRTOS-000000?logo=linux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Silicon-STM32_(Bare--Metal)_|_ESP32_SMP-0036C1?logo=stmicroelectronics&logoColor=white"/>
  <img src="https://img.shields.io/badge/Domain-Aerospace_|_Defense_|_Robotics-0091BD?logo=spaceX&logoColor=white"/>
  <br>
  <img src="https://img.shields.io/badge/Protocols-XRCE--DDS_|_MAVLink_|_POSIX_IPC-FCC624?logo=network&logoColor=black"/>
  <img src="https://img.shields.io/badge/Compute-CUDA_|_OpenMP_|_SystemVerilog-76B900?logo=nvidia&logoColor=white"/>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/ps-o5/">  
    <img src="https://img.shields.io/badge/Connect-LinkedIn-0077B5?logo=linkedin&logoColor=white&style=for-the-badge"/>
  </a>
  <a href="mailto:patsuryawanshi@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Me-D14836?logo=gmail&logoColor=white&style=for-the-badge"/>
  </a>
</p>

---

### 🚀 Operational Readiness
📍 **Location:** Munich / Bavaria
🎯 **Availability:** Actively seeking an M.Sc. Thesis (Masterarbeit) or Werkstudent role in Deep-Tech / Robotics.
⚙️ **Core Focus:** Distributed Autonomous Systems, RTOS Core Isolation, Bare-Metal Graphics Pipelines, and HIL Testing.

---

### 🔬 Active Deployments & Architecture

#### 1. ROS2 Distributed Kinematics Node (AMP Architecture) *(Active Sprint)*
*A physically isolated, heterogeneous compute pipeline for autonomous robotics.*
* **The Stack:** `ROS2` • `FreeRTOS SMP` • `Micro-ROS (XRCE-DDS)` • `STM32F411` • `ESP32`
* **Architecture:** Engineered an Asymmetric Multi-Processing (AMP) bridge. The STM32 acts as a dedicated, bare-metal sensor ECU maintaining a strict 50Hz deterministic hardware loop.
* **Telemetry:** Data is passed via high-speed UART to a dual-core ESP32 TCU. Utilized FreeRTOS core-pinning to isolate non-deterministic WiFi/UDP transport from the real-time sensor queue, achieving sub-5ms transport latency to a ROS2 `tf2` tree.

#### 2. Automotive Safety Gateway (ASG) 
*A POSIX-compliant enterprise node bridging a bare-metal edge controller with a microkernel RTOS.*
* **The Stack:** `QNX RTOS 8.0` • `Raspberry Pi 4` • `STM32F411` • `Bare-Metal C (Zero HAL)`
* **Architecture:** Engineered a formal **QNX POSIX VFS Resource Manager**, mounting the STM32 directly into the file system (`/dev/asg_sensor`). 
* **Safety:** Built an ASIL-aware hardware Independent Watchdog (IWDG) for graceful degradation and a UDP telemetry bridge.
* 🔗 [View Architecture & LaTeX Report Here](https://github.com/PS-O5/QNX-AMP-Gateway-Pi-4-Edge-Node)

#### 3. Bare-Metal DMA Raycaster *(In Development)*
*Proving extreme hardware-software co-design by bypassing RAM limitations on ARM Cortex-M architecture.*
* **The Stack:** `STM32H7` • `SPI` • `Direct Memory Access (DMA)` • `Fixed-Point C`
* **Architecture:** Developing a custom 3D raycasting engine from scratch. Designed a "Slice & Stream" rendering pipeline that completely bypasses the need for a full framebuffer.
* **Optimization:** The CPU calculates column geometry using heavily optimized fixed-point trigonometry while the DMA controller asynchronously blasts the previous 16bpp RGB565 column to an ST7789 display, achieving maximum SPI throughput with Zero HAL bloat.

---

### 🛠️ The Arsenal

| Domain | Technologies & Standards |
| :--- | :--- |
| **RTOS & Systems** | FreeRTOS (SMP), QNX, Apache NuttX, POSIX VFS, IPC Message Passing |
| **Hardware Abstraction** | Bare-Metal C (Register-Level), Zero HAL, Custom DMA Pipelines |
| **Silicon Targets** | STM32 (Cortex-M4/M7), ESP32 (Xtensa Dual-Core), Raspberry Pi |
| **Comms & Ecosystem** | ROS2, Micro-ROS, MAVLink, UDP/TCP, UART/I2C/SPI |

---

### 🧘‍♂️ Operational Psychology
Engineering complex systems requires absolute mental bandwidth. I maintain mine through strict offline discipline:
* **Endurance Training:** Building physical baseline and stress tolerance.
* **Classical Flute:** Training focus, breath control, and pattern recognition.
* **Philosophy:** Studying *Tantra* and Advaita Vedanta to maintain deterministic focus in a non-deterministic world.

<br>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=PS-O5&color=blue" alt="Profile Views" />
</p>
