import { FlowTypes } from "data-models";
type ISheetContents = {
  [flow_type in FlowTypes.FlowType]: { [flow_name: string]: FlowTypes.FlowTypeBase };
};
export const SHEETS_CONTENT_LIST: ISheetContents = {
  data_list: {},
  global: {},
  template: {
    debug_sheet: {
      flow_type: "template",
      flow_name: "debug_sheet",
      flow_subtype: "debug",
      comment: "currently filtered out",
      _xlsxPath: "example_sheet.xlsx",
    },
    home_screen: {
      flow_type: "template",
      flow_name: "home_screen",
      _xlsxPath: "example_sheet.xlsx",
    },
    page_2: {
      flow_type: "template",
      flow_name: "page_2",
      _xlsxPath: "example_sheet.xlsx",
    },
    weekly_workshops: {
      flow_type: "template",
      flow_name: "weekly_workshops",
      _xlsxPath: "subfolder_1/duplicate_sheet_1.xlsx",
    },
  },
  tour: {},
};
