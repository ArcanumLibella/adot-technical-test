/* eslint-disable jest/expect-expect */
import { render } from "@testing-library/react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DestinationsContextType,
  IDestination,
} from "../../../@types/destination";
import DestinationsContextProvider, {
  DestinationsContext,
} from "../../../context/DestinationContext";
import { CardDestination } from "./CardDestination";

describe("CardDestination", () => {
  const { destinations } = useContext(
    DestinationsContext,
  ) as DestinationsContextType;

  test("Should render CardDestination without crashing", async () => {
    render(
      <DestinationsContextProvider>
        {destinations.map((destination: IDestination) => (
          <CardDestination key={uuidv4()} destination={destination} />
        ))}
      </DestinationsContextProvider>,
    );
  });
});
