import * as React from "react";
import { getDataResults } from "../api";
import {
  addToSavedProperties,
  removeFromSavedProperties,
} from "../utils/propertyAction";
import { Property, PropertyData } from "../types";
import { PropertyComponent, BoxContainer } from "../component/PropertyComponent";

const Home: React.FC = () => {
  const [propertyData, setPropertyData] = React.useState<
    Property | undefined
  >();
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
        <BoxContainer>
          <PropertyComponent
            type={"results"}
            data={propertyList}
            actions={(
              propertyList: Property,
              item: PropertyData,
              index: number
            ) =>
              setPropertyData(addToSavedProperties(propertyList, item, index))
            }
          />
          <PropertyComponent
            type={"saved"}
            data={propertyList}
            actions={(
              propertyList: Property,
              item: PropertyData,
              index: number
            ) =>
              setPropertyData(
                removeFromSavedProperties(propertyList, item, index)
              )
            }
          />
        </BoxContainer>
      ) : null}
    </>
  );
};

export default Home;
