export interface Car {
    length: number;
    _id: string;                 // Unique identifier for the car
    name: string;                // Name of the car
    type: string;                // Type of the car (e.g., Sedan, SUV)
    transmission: string;        // Transmission type (e.g., Automatic, Manual)
    pricePerDay: number;         // Daily rental price
    seatingCapacity: number;     // Number of seats in the car
    fuelCapacity: number;        // Fuel capacity of the car in liters
    imageUrl: string; 
    slug: string                // URL for the car's image
  }

  export interface CarDetails {
                   // Unique identifier for the car
    name: string;                // Name of the car
    type: string;                // Type of the car (e.g., Sedan, SUV)
    transmission: string;        // Transmission type (e.g., Automatic, Manual)
    pricePerDay: number;         // Daily rental price
    seatingCapacity: number;     // Number of seats in the car
    fuelCapacity: number;        // Fuel capacity of the car in liters
    image: string; 
    slug: string              // URL for the car's image
  }
  export interface CarPayment {
    map(arg0: (car: { _id: import("react").Key | null | undefined; imageUrl: string | import("next/dist/shared/lib/get-img-props").StaticImport; name: string | number | bigint | boolean | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<unknown>> | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<unknown>> | Iterable<import("react").ReactNode> | null | undefined> | null | undefined; }) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    id: string;
                   // Unique identifier for the car
    name: string;                // Name of the car
                    // Type of the car (e.g., Sedan, SUV)
          // Transmission type (e.g., Automatic, Manual)
    pricePerDay: number;         // Daily rental price
        // Number of seats in the car
       // Fuel capacity of the car in liters
    imageUrl: string; 
                // URL for the car's image
  }
  export interface CarAdmin {
      _id: Key | null | undefined;
                   // Unique identifier for the car
    name: string;                // Name of the car
                    // Type of the car (e.g., Sedan, SUV)
          // Transmission type (e.g., Automatic, Manual)
    pricePerDay: number;         // Daily rental price
        // Number of seats in the car
       // Fuel capacity of the car in liters
    imageUrl: string; 
                // URL for the car's image
                type: string;                // Type of the car (e.g., Sedan, SUV)
  }
     