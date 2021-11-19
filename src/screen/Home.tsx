import * as React from "react";
import { getDataResults } from "../api";
import {
  addToSavedProperties,
  removeFromSavedProperties,
} from "../utils/propertyAction";
import { PropertyComponent } from "../component/PropertyComponent";

// import Result from "../components/Result";
// import { getFestivalsData } from "../utils";

const Home: React.FC = () => {
  const [propertyData, setPropertyData] = React.useState<any>();
  React.useEffect(() => {
    // Should Start grabbing data from webServices API
    const load = async () => {
      setPropertyData(await getDataResults());
    };
    load();
  }, []);

  let propertyList = propertyData ? propertyData : undefined;

  return (
    <>
      {propertyList ? (
        <>
          <PropertyComponent
            type={"results"}
            data={propertyList}
            actions={(data: any, item: any, index: number) =>
              setPropertyData(addToSavedProperties(propertyList, item, index))
            }
          />
          <PropertyComponent
            type={"saved"}
            data={propertyList}
            actions={(data: any, item: any, index: number) =>
              setPropertyData(removeFromSavedProperties(propertyList, item, index))
            }
          />
        </>
      ) : null}
    </>
  );
};

export default Home;
