<h1 align="center">Pratik Suryawanshi</h1>
<h3 align="center">Embedded Systems Architect | Real-Time Control & Estimation | Bare-Metal Edge</h3>

<p align="center">
  <i>Architecting deterministic, safety-critical, and mathematically rigorous systems across the hardware-software boundary.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/OS-QNX_|_Apache_NuttX_|_FreeRTOS_SMP_|_Zephyr_|-000000?logo=linux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Silicon-STM32_(Bare--Metal)_|_ESP32_|_RISC--V-0036C1?logo=stmicroelectronics&logoColor=white"/>
  <img src="https://img.shields.io/badge/Domain-Aerospace_|_Defense_|_Industrial_Automation-0091BD?logo=spaceX&logoColor=white"/>
  <br>
  <img src="https://img.shields.io/badge/Protocols-XRCE--DDS_|_MAVLink_|_POSIX_IPC_|_SPI_|_I2C_|_CAN-FCC624?logo=network&logoColor=black"/>
  <img src="https://img.shields.io/badge/Compute-C%2B%2B17/20_|_CUDA_|_OpenMP_|_SystemVerilog-76B900?logo=nvidia&logoColor=white"/>
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
📍 **Location:** Munich / Bavaria, Germany  
🎯 **Availability:** Open for high-impact Engineering Roles, M.Sc. Thesis positions, or Werkstudent tracks within deep-tech and autonomous flight systems.  
⚙️ **Core Focus:** Hard Real-Time Systems, Zero-Allocation Control Math, Hardware-in-the-Loop (HIL) Simulation, and Microkernel RTOS Driver Architectures.

---

### 🔬 Active Deployments & Architecture

#### 1. Embedded Real-Time MPC & State Estimation Engine
*A zero-dynamic-allocation control framework optimized for resource-constrained flight and robotics platforms requiring absolute timing determinism.*
* **The Stack:** `Bare-Metal C++17` • `ARM Cortex-M4/M7` • `Fixed-Point Math` • `In-Place Matrix Factorization`
* **Mathematical Rigor:** Developed a high-frequency constrained Model Predictive Control (MPC) engine coupled with an Extended Kalman Filter (EKF). Implemented a 4th-order Runge-Kutta numerical integration loop for high-fidelity non-linear state estimation.
* **Memory & Execution Safety:** Eliminated heap fragmentation and non-deterministic latencies completely by utilizing C++ compile-time templates (`std::array`) to resolve matrix dimensions at compile time. Bypassed explicit matrix inversions in real-time by engineering an in-place Cholesky decomposition solver to handle linear systems directly on the stack.

#### 2. Physical Actuator & Sensor-in-the-Loop (PASIL) Testbench
*An aerospace-grade hardware-in-the-loop (HIL) validation platform proving mastery of microkernel RTOS driver architecture and deterministic physical actuation loops.*
* **The Stack:** `Apache NuttX RTOS` • `Bare-Metal C` • `Hardware-in-the-Loop (HIL)` • `SPI / I2C / UART` • `STM32`
* **Architecture:** Bypassed high-level flight stacks to engineer a low-latency, real-time physical sensor-actuator bridge. Wrote custom low-level NuttX microkernel character drivers to interface with physical IMUs, exposing raw high-frequency sensor telemetry to the processing pipeline.
* **Control & Real-Time Execution:** Mapped direct kinetic actuation data directly to STM32 hardware PWM timers. Achieved deterministic, sub-millisecond execution cycles under strict real-time constraints, establishing a highly reliable testing environment for closed-loop autonomous system simulation.
* 🔗 [View Architecture & Repository](https://github.com/PS-O5/VANGUARD-PASIL)

#### 3. Wolfenstein 3D Bare-Metal Port
*A register-level DMA graphics and peripheral pipeline proving extreme hardware-software co-design on a constrained ARM architecture.*
* **The Stack:** `STM32F411CEU6` • `Bare-Metal C` • `Direct Memory Access (DMA)` • `SPI Hardware` • `PWM Audio`
* **Architecture:** Ported the legendary 1992 raycasting engine directly onto bare-metal silicon. Designed a "Slice & Stream" rendering pipeline that completely bypasses the 128KB SRAM limit by eliminating a global framebuffer.
* **Optimization:** The CPU calculates column geometry using heavily optimized fixed-point trigonometry tables while the DMA asynchronously blasts 16bpp RGB565 columns to an ST7789 display. Integrated an analog joystick via raw ADC and drove real-time square-wave audio effects through bare-metal timer-driven PWM to a physical piezo speaker.
* 🔗 [View Codebase & Architecture](https://github.com/PS-O5/wolf3d-stm32f411ceu6)

#### 4. Automotive Safety Gateway (ASG)
*A distributed, POSIX-compliant enterprise architecture bridging a microkernel RTOS with a bare-metal edge controller.*
* **The Stack:** `QNX RTOS 8.0` • `Raspberry Pi 4` • `STM32F411` • `POSIX VFS Resource Manager`
* **Architecture:** Upgraded a multi-processor IPC architecture into a formal QNX POSIX VFS Resource Manager, cleanly mounting the edge microcontroller directly into the microkernel filesystem layout at `/dev/asg_sensor`. 
* **Safety & Diagnostics:** Engineered an ASIL-aware hardware Independent Watchdog (IWDG) system for graceful degradation states and built a POSIX UDP telemetry link for real-time network visibility.
* 🔗 [View Architecture & LaTeX Technical Report](https://github.com/PS-O5/QNX-AMP-Gateway-Pi-4-Edge-Node)

---

### 🛠️ The Arsenal

| Domain | Technologies, Standards & Architectures |
| :--- | :--- |
| **RTOS & Kernels** | QNX RTOS, Apache NuttX, FreeRTOS (Asymmetric/Symmetric Multi-Processing), POSIX VFS, Microkernels |
| **Hardware Mastery** | Bare-Metal C/C++ (Register-Level), Zero-HAL Development, Custom DMA Pipelines, Interrupt Handlers |
| **Silicon Targets** | STM32 (Cortex-M4/M7), ESP32 (Xtensa Dual-Core), Raspberry Pi, RISC-V Architectures |
| **Protocols & Networks** | ROS2, Micro-ROS (XRCE-DDS), MAVLink, PX4 Autopilot, CAN Bus, SPI, I2C, UART, UDP/TCP |
| **HPC & Logic** | CUDA Acceleration, OpenMP Multithreading, MPI Clusters, SystemVerilog RTL Layout |

---

### 🧘‍♂️ Operational Psychology
Engineering safety-critical, high-frequency systems requires deep mental bandwidth and cognitive stability. I maintain mine through continuous offline discipline:
* **Philosophy:** Dedicated student of *Tantra* (The Science of Inner Energy Transformation) & Advaita Vedanta.
* **Focus Mechanics:** Classical North Indian Flute (Bansuri) practice and long-distance Endurance Training.

<p align="center">
  <b>"I build deterministic systems in a non-deterministic world."</b>
</p>

<br>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=PS-O5&color=blue" alt="Profile Views" />
</p>
