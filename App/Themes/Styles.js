import { StyleSheet as StyleSheetRN } from 'react-native'

import Metrics from './Metrics'
import Colors from './Colors'
import Fonts from './Fonts'

import { isIphoneX } from 'App/Services/Properties'

export const Styles = {
  // Layout
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    height: Metrics.screenHeight
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  separator: {
    flexDirection: 'row',
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
    marginVertical: Metrics.unit * 2,
    marginHorizontal: Metrics.unit * 2
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: 80,
    backgroundColor: Colors.footer.background,
    paddingTop: Metrics.unit * 4,
    paddingBottom: (isIphoneX()) ? Metrics.unit * 5 : Metrics.unit * 4
  },

  // Typography
  text: {
    ...Fonts.style.normal,
    color: Colors.text
  },
  text_medium: {
    fontSize: Fonts.size.medium
  },
  text_small: {
    fontSize: Fonts.size.small
  },
  text_bold: {
    ...Fonts.style.normalBold
  },
  text_disabled: {
    color: Colors.text_disabled
  },
  text_error: {
    color: Colors.text_error
  },
  text_center: {
    textAlign: 'center'
  },

  // Form
  formView: {
    margin: Metrics.unit * 2
  },
  formTitle: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.large,
    color: Colors.text
  },
  form: {
    marginVertical: Metrics.unit
  },
  input: {
    marginVertical: Metrics.unit / 2
  }
}

export const StyleSheet = StyleSheetRN.create(Styles)
