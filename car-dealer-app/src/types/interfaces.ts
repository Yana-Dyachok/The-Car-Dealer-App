export interface IVehicleData {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IVehicleGeneralResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
}

export interface IVehicleResponse extends IVehicleGeneralResponse {
  Results: IVehicleData[];
}

export interface IVehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface IVehicleModelResponse extends IVehicleGeneralResponse {
  Results: IVehicleModel[];
}
