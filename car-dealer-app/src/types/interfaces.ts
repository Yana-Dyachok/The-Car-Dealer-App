export interface IVehicleData {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IVehicleResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleData[];
}
