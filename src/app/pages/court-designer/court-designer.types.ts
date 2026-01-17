export interface ColorOption {
  value: string;
  label: string;
  displayColor: string;
  textColor?: string; // for light backgrounds
}

export interface CourtDesignState {
  [zone: string]: string; // zone -> color value
}

