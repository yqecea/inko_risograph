
/**
 * INKO Ink Engine Core
 * Handles the metaphorical "viscosity" and "drying time" of data streams.
 * This service demonstrates the extreme detail requested in the Prime prompt.
 */

export interface InkState {
  viscosity: number; // 0.0 to 1.0
  dryTime: number;   // seconds
  colorIntensity: number;
  layers: number;
}

export class InkEngine {
  private static instance: InkEngine;
  private state: InkState = {
    viscosity: 0.85,
    dryTime: 2.5,
    colorIntensity: 1.0,
    layers: 4,
  };

  private constructor() {
    console.log("INKO Engine Initialized: Loading Master Plates...");
  }

  public static getInstance(): InkEngine {
    if (!InkEngine.instance) {
      InkEngine.instance = new InkEngine();
    }
    return InkEngine.instance;
  }

  /**
   * Calculates the optimal "print pressure" based on the data complexity.
   * Higher complexity requires lower speed and higher pressure to avoid bleed.
   */
  public calculatePrintPressure(dataVolume: number, complexity: number): number {
    const basePressure = 0.5;
    const volumeModifier = Math.min(dataVolume / 1000, 0.4);
    const complexityModifier = complexity * 0.1;
    
    // The physics of digital ink
    return (basePressure + volumeModifier + complexityModifier) * this.state.viscosity;
  }

  /**
   * Simulates the layering process of the Risograph.
   * Every insight must pass through multiple color filters.
   */
  public async processLayer(layerIndex: number, payload: unknown): Promise<void> {
    return new Promise((resolve) => {
      const processingTime = (this.state.dryTime / this.state.layers) * 1000;
      setTimeout(() => {
        console.log(`Layer ${layerIndex + 1} finalized: ${this.getPassName(layerIndex)}`);
        resolve();
      }, processingTime);
    });
  }

  private getPassName(index: number): string {
    const passes = ["PRIMER", "CHROMA_PIN", "STRUCT_BLUE", "FINISH_BLACK"];
    return passes[index] || "UNKNOWN_PASS";
  }

  /**
   * Generates a unique grain seed for a specific UI element to ensure no two renders are identical.
   */
  public generateGrainSeed(): string {
    return Math.random().toString(36).substring(7);
  }

  /**
   * Adjusts engine performance based on browser capabilities while maintaining visual fidelity.
   */
  public optimizePerformance(fps: number): void {
    if (fps < 45) {
      this.state.viscosity *= 0.9;
      console.warn("Reducing ink viscosity for performance stability.");
    }
  }
}

export const inkEngine = InkEngine.getInstance();
