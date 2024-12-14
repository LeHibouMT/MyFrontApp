import "@testing-library/jest-dom";
import { BlockerFunction } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "components/Settings";
import { PossiblePathsEnum } from "utils/constants.utils";
import { LanguageKey, PossibleLanguagesEnum } from "utils/language.utils";
import { PossibleThemesEnum, ThemeKey } from "utils/theme.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom")
}));

describe("Settings", () => {
  it("renders without errors", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: undefined }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
  });

  it("renders without errors with setting from the url params", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: LanguageKey }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("changes theme when a new theme is selected", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: ThemeKey }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Dark"));

    expect((screen.getAllByRole("radio")[1] as HTMLInputElement).value).toBe(PossibleThemesEnum.dark);
    expect(screen.getAllByRole("radio")[1]).toBeChecked();
  });

  it("redirects to another page when switching tab", () => {
    const navigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn().mockImplementation(() => navigate),
      useParams: jest.fn().mockReturnValue({ setting: undefined }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Language"));

    expect(navigate).toHaveBeenCalledWith(PossiblePathsEnum.languageSettings);

    fireEvent.click(screen.getByText("Theme"));

    expect(navigate).toHaveBeenCalledWith(PossiblePathsEnum.themeSettings);
  });

  it("renders the modal when trying to switch tab with unsaved changes", async () => {
    const navigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn().mockImplementation(() => navigate),
      useParams: jest.fn().mockReturnValue({ setting: undefined }),
      useBlocker: jest.fn().mockReturnValue((blocker: BlockerFunction) => {
        blocker({
          currentLocation: {
            pathname: "/settings",
            state: undefined,
            key: "",
            search: "",
            hash: ""
          },
          nextLocation: {
            pathname: "/settings/language",
            state: undefined,
            key: "",
            search: "",
            hash: ""
          },
          // @ts-expect-error because the enums can't be imported from the module.
          historyAction: "PUSH"
        });
        return {
          state: "blocked"
        };
      })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Dark"));

    expect((screen.getAllByRole("radio")[1] as HTMLInputElement).value).toBe(PossibleThemesEnum.dark);
    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    fireEvent.click(screen.getByText("Language"));

    expect(navigate).toHaveBeenCalledWith(PossiblePathsEnum.languageSettings);
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("You have unsaved changes, please confirm or cancel changes.")).toBeInTheDocument();
  });

  it("buttons disabled for theme settings", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: undefined }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);
    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();

    fireEvent.click(screen.getByText("Dark"));

    expect(screen.getByText("Confirm")).toBeEnabled();
    expect(screen.getByText("Cancel")).toBeEnabled();

    fireEvent.click(screen.getByText("Light"));

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });

  it("buttons disabled for language settings", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: LanguageKey }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);
    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();

    fireEvent.click(screen.getByText("Français"));

    expect(screen.getByText("Confirm")).toBeEnabled();
    expect(screen.getByText("Cancel")).toBeEnabled();

    fireEvent.click(screen.getByText("English"));

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });

  it("confirm button on click for theme setting", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: undefined }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Dark"));

    expect((screen.getAllByRole("radio")[1] as HTMLInputElement).value).toBe(PossibleThemesEnum.dark);
    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    fireEvent.click(screen.getByText("Confirm"));

    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });

  it("cancel button on click for theme setting", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: undefined }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Dark"));

    expect((screen.getAllByRole("radio")[1] as HTMLInputElement).value).toBe(PossibleThemesEnum.dark);
    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.getAllByRole("radio")[1]).not.toBeChecked();

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });

  it("confirm button on click for language setting", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: LanguageKey }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Français"));

    expect((screen.getAllByRole("radio")[1] as HTMLInputElement).value).toBe(PossibleLanguagesEnum.french);
    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    fireEvent.click(screen.getByText("Confirm"));

    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });

  it("cancel button on click for language setting", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: jest.fn(),
      useParams: jest.fn().mockReturnValue({ setting: LanguageKey }),
      useBlocker: jest.fn().mockReturnValue({ state: "unblocked" })
    }));
    render(<Settings />);

    fireEvent.click(screen.getByText("Français"));

    expect((screen.getAllByRole("radio")[1] as HTMLInputElement).value).toBe(PossibleLanguagesEnum.french);
    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.getAllByRole("radio")[1]).not.toBeChecked();

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });
});
