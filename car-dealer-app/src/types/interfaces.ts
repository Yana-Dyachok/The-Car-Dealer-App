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

export interface IVehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface IVehicleModelResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleModel[];
}
