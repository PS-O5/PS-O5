<h1 align="center">Pratik Suryawanshi</h1>
<h3 align="center">Embedded Systems Architect | RTOS & Hardware-in-the-Loop | Bare-Metal Edge</h3>

<p align="center">
  <i>Architecting deterministic, safety-critical communication across the hardware-software boundary.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/OS-QNX_|_Apache_NuttX_|_FreeRTOS-000000?logo=linux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Silicon-STM32_(Bare--Metal)_|_ARM_Cortex--M/A-0036C1?logo=stmicroelectronics&logoColor=white"/>
  <img src="https://img.shields.io/badge/Domain-Aerospace_|_Defense_|_Robotics-0091BD?logo=spaceX&logoColor=white"/>
  <br>
  <img src="https://img.shields.io/badge/Protocols-MAVLink_|_POSIX_IPC_|_UDP-FCC624?logo=network&logoColor=black"/>
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
🎯 **Availability:** Actively seeking a Master's Thesis or Werkstudent role.
⚙️ **Focus:** Autonomous Systems, Flight Controllers (PX4), Hardware-in-the-Loop (HIL), and Microkernel RTOS Integration.

---

### 🔬 Active & Featured Architecture

#### 1. Automotive Safety Gateway (ASG) - Phase 4 
*A distributed, POSIX-compliant enterprise node bridging a bare-metal edge controller with a microkernel RTOS.*
* **The Stack:** `QNX RTOS 8.0` • `Raspberry Pi 4` • `STM32F411` • `Bare-Metal C (Zero HAL)`
* **Architecture:** Upgraded raw IPC into a formal **QNX POSIX VFS Resource Manager**, mounting the STM32 directly into the file system (`/dev/asg_sensor`). 
* **Safety & Routing:** Engineered an ASIL-aware hardware Independent Watchdog (IWDG) for graceful degradation and built a POSIX UDP telemetry bridge for network visibility.
* 🔗 [View Architecture & LaTeX Report Here] *(Insert your repo link here)*

#### 2. PX4 Physical Actuator & Sensor-in-the-Loop (PASIL) *(Active Sprint)*
*Building an aerospace-grade testbench proving mastery of flight stacks, custom RTOS driver integration, and MAVLink telemetry.*
* **The Stack:** `Apache NuttX` • `PX4 Autopilot` • `MAVLink` • `Gazebo`
* **Architecture:** Writing custom I2C/SPI drivers in NuttX to expose a physical sensor stack to the PX4 uORB bus. Mapping PX4 mixer outputs to STM32 hardware PWM timers for kinetic actuation.

#### 3. HPC / Silicon Acceleration Background
*Proving high-performance algorithmic capability and hardware-software co-design.*
* **Automotive Simulation Engine:** Optimized GPU memory patterns in **CUDA/C++** for real-time vehicle dynamics solving.
* **SoC Partitioning Framework:** Reduced NoC traffic by 40% for multi-core architectures using **Python/SystemC**.

---

### 🛠️ The Arsenal

| Domain | Technologies & Standards |
| :--- | :--- |
| **RTOS & Systems** | QNX, Apache NuttX, FreeRTOS, POSIX VFS, IPC Message Passing |
| **Edge Hardware** | STM32 (Direct Register Manipulation), ARM Cortex-M/A, RISC-V |
| **Comms & Ecosystem** | MAVLink, PX4, UDP/TCP, UART/I2C/SPI, CCITT-False CRC |
| **HPC & Acceleration** | CUDA, OpenMP, MPI, SIMD (AVX/RVV) |

---

### 🧘‍♂️ The Human Side
Engineering is a discipline of mind and body. When I am not optimizing embedded kernels:
* **Philosophy:** Student of *Tantra* (Science of Inner Transformation) & Advaita Vedanta.
* **Focus:** Classical Flute practice and Endurance Training.

<p align="center">
  <i>"I build deterministic systems in a non-deterministic world."</i>
</p>

![Profile Views](https://komarev.com/ghpvc/?username=PS-O5&color=blue) - Since 23.02.2026
