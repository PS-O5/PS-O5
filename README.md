<h1 align="center">Pratik Suryawanshi</h1>
<h3 align="center">Embedded Systems Architect | RTOS & Hardware-in-the-Loop | Bare-Metal Edge</h3>

<p align="center">
  <i>Architecting deterministic, safety-critical and robust systems across the hardware-software boundary.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/OS-QNX_|_Apache_NuttX_|_FreeRTOS|_PX4_|_Zephyr_|-000000?logo=linux&logoColor=white"/>
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

### 🚀 Status: The Munich Blitz
📍 **Location:** Munich / Bavaria
🎯 **Availability:** Actively seeking an M.Sc. Thesis (Masterarbeit) or Werkstudent role in Deep-Tech / Aerospace / Robotics.
⚙️ **Core Focus:** Autonomous Systems, RTOS Core Isolation, Deterministic HIL Testing, and Bare-Metal Hardware Pipelines.

---

### 🔬 Active Deployments & Architecture

#### 1. Physical Actuator & Sensor-in-the-Loop (PASIL)
*Aerospace-grade testbench proving mastery of microkernel RTOS driver integration and deterministic bare-metal hardware control.*
* **The Stack:** `Apache NuttX` • `Bare-Metal C` • `Hardware-in-the-Loop (HIL)` • `SPI/I2C`
* **Architecture:** Bypassed high-level flight stacks to engineer a custom bare-metal and NuttX-driven physical sensor bridge. Wrote custom low-level drivers to expose raw sensor telemetry and map direct kinetic actuation to STM32 hardware PWM timers, ensuring absolute deterministic execution.
* 🔗 [View Architecture & Repository Here](https://github.com/PS-O5/VANGUARD-PASIL)

#### 2. Automotive Safety Gateway (ASG) - Phase 4 
*A distributed, POSIX-compliant enterprise node bridging a bare-metal edge controller with a microkernel RTOS.*
* **The Stack:** `QNX RTOS 8.0` • `Raspberry Pi 4` • `STM32F411` • `Bare-Metal C (Zero HAL)`
* **Architecture:** Upgraded raw IPC into a formal **QNX POSIX VFS Resource Manager**, mounting the STM32 directly into the file system (`/dev/asg_sensor`). 
* **Safety:** Engineered an ASIL-aware hardware Independent Watchdog (IWDG) for graceful degradation and built a POSIX UDP telemetry bridge for network visibility.
* 🔗 [View Architecture & LaTeX Report Here](https://github.com/PS-O5/QNX-AMP-Gateway-Pi-4-Edge-Node)

#### 3. ROS2 Distributed Kinematics Node (AMP Architecture) *(Active Sprint)*
*A physically isolated, heterogeneous compute pipeline for autonomous robotics.*
* **The Stack:** `ROS2` • `FreeRTOS SMP` • `Micro-ROS (XRCE-DDS)` • `STM32F411` • `ESP32`
* **Architecture:** Engineered an Asymmetric Multi-Processing (AMP) bridge. The STM32 acts as a dedicated, bare-metal sensor ECU maintaining a strict 50Hz deterministic hardware loop. Data is passed via high-speed UART to a dual-core ESP32 TCU. 
* **Core Isolation:** Utilized FreeRTOS core-pinning to isolate non-deterministic WiFi/UDP transport from the real-time sensor queue, achieving sub-5ms transport latency to a ROS2 `tf2` tree.

#### 4. Wolfenstein 3D Bare-Metal Port
*A register-level DMA graphics pipeline proving extreme hardware-software co-design on constrained ARM Cortex-M architecture.*
* **The Stack:** `STM32F411CEU6` • `SPI` • `Direct Memory Access (DMA)` • `Fixed-Point C`
* **Architecture:** Engineering a bare-metal port of the legendary 1992 raycasting engine. Designed a "Slice & Stream" rendering pipeline that bypasses the 128KB SRAM limit by eliminating the framebuffer. 
* **Optimization:** The CPU calculates column geometry using heavily optimized fixed-point trigonometry while the DMA asynchronously blasts 16bpp RGB565 columns to an ST7789 display, achieving maximum SPI throughput with Zero HAL bloat.
* 🔗 [View Repo and the Game Engine Here](https://github.com/PS-O5/wolf3d-stm32f411ceu6)

---

### 🛠️ The Arsenal

| Domain | Technologies & Standards |
| :--- | :--- |
| **RTOS & Systems** | QNX, Apache NuttX, FreeRTOS (SMP), POSIX VFS, IPC Message Passing |
| **Hardware Abstraction** | Bare-Metal C (Register-Level), Zero HAL, Custom DMA Pipelines |
| **Silicon Targets** | STM32 (Cortex-M4/M7), ESP32 (Xtensa Dual-Core), Raspberry Pi, RISC-V |
| **Comms & Ecosystem** | ROS2, Micro-ROS, MAVLink, PX4, UDP/TCP, UART/I2C/SPI |
| **HPC & Acceleration** | CUDA, OpenMP, MPI, SystemVerilog |

---

### 🧘‍♂️ Operational Psychology
Engineering complex systems requires absolute mental bandwidth. I maintain mine through strict offline discipline:
* **Philosophy:** Student of *Tantra* (Science of Inner Transformation) & Advaita Vedanta.
* **Focus:** Classical Flute practice and Endurance Training.

<p align="center">
  <i>"I build deterministic systems in a non-deterministic world."</i>
</p>

<br>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=PS-O5&color=blue" alt="Profile Views" />
</p>
