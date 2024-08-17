export const commonArgsForStoryBook = {
  /** DESIGN PROPS */
  flexDirection: {
    control: "select",
    options: ["row", "col", "row-reverse"],
    table: {
      category: "Design props",
    },
  },
  justifyContent: {
    control: "select",
    options: [
      "start",
      "end",
      "center",
      "between",
      "evenly",
      "stretch",
      "around",
    ],
    table: {
      category: "Design props",
    },
  },
  alignItems: {
    control: "select",
    options: ["start", "end", "center", "baseline", "stretch"],
    table: {
      category: "Design props",
    },
  },
  gap: {
    control: "select",
    options: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '60', '70'],
    table: {
      category: "Design props",
    },
  },
  gapCol: {
    control: "select",
    options: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '60', '70'],
    table: {
      category: "Design props",
    }
  },
  gapRow: {
    control: "select",
    options: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  background: {
    control: 'select',
    options: ['primary-0', 'primary-50', 'primary-100','primary-150','primary-250', 'primary-500', 'primary-600', 'primary-700', 'primary-800', 'secondary-200', 'secondary-300', 'secondary-400', 'secondary-500', 'secondary-600', 'secondary-700', 'gradients-100', 'gradients-700', 'gradients-GR-1', 'gradients-GR-2', 'gradients-GR-3', 'gradients-GR-4', 'gradients-GR-5'],
    table: {
      category: 'Design Props',
    }
  },
  color: {
    control: 'select',
    options: ['primary-0', 'primary-50', 'primary-100','primary-150','primary-250', 'primary-500', 'primary-600', 'primary-700', 'primary-800', 'secondary-200', 'secondary-300', 'secondary-400', 'secondary-500', 'secondary-600', 'secondary-700', 'gradients-100', 'gradients-700', 'gradients-GR-1', 'gradients-GR-2', 'gradients-GR-3', 'gradients-GR-4', 'gradients-GR-5'],
    table: {
      category: 'Design Props',
    }
  },
  padding: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  paddingTop: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  paddingBottom: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  paddingRight: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  paddingLeft: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  margin: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  marginTop: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  marginBottom: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  marginRight: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  marginLeft: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  marginCenter: {
    control: {type: "select"},
    options: ['0', '5', '10', '15', '20', '25', '30', '50', '60', '70'],
    table: {
      category: "Design props",
    },  
  },
  borderRadius: {
    control: 'select',
    options: ['0', '100', '200'],
    table: {
      category: 'Design props'
    }
  },
  shadow: {
    control: 'select',
    options: ['0', '100', '200', '300'],
    table: {
      category: 'Design props'
    }
  },
  border: {
    control: 'select',
    options: ['transparent', '0', '100'],
    table: {
      category: 'Design props'
    }
  },
  borderColor: {
    control: 'select',
    options: ['primary-0', 'primary-50', 'primary-100','primary-150','primary-250', 'primary-500', 'primary-600', 'primary-700', 'primary-800', 'secondary-200', 'secondary-300', 'secondary-400', 'secondary-500', 'secondary-600', 'secondary-700'],
    table: {
      category: 'Design Props',
    }
  },
  width: {
    control: 'select',
    options: ['20', '25', '33', '50', '75', '90', '100', 'fit-content'],
    table: {
      category: 'Design props'
    }
  },
  position: {
    control: 'select',
    options: ['absolute', 'relative', 'sticky', 'fixed'],
    table: {
      category: 'Design props'
    }
  },
  top: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  left: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  right: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  bottom: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  centerX: {
    control: 'boolean',
    table: {
      category: 'Design props'
    },
  },
  centerY: {
    control: 'boolean',
    table: {
      category: 'Design props'
    },
  },
  fixedMinWidth: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  fixedMaxWidth: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  fixedWidth: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  fixedMinHeight: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  fixedMaxHeight: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  fixedHeight: {
    control: 'text',
    table: {
      category: 'Design props'
    },
  },
  /** TYPOGRAPHY PROPS */
  fontSize: {
    control: 'select',
    options: ['16', '18', '22', '24', '28', '35', '43'],
    table: {
      category: 'Typography props',
    },
  },
  fontWeight: {
    control: 'select',
    options: ['400', '500', '600', '700'],
    table: {
      category: 'Typography props',
    },
  },
  textAlign: {
    control: 'select',
    options: ['left', 'center', 'right'],
    table: {
      category: 'Typography props',
    },
  },
  rowLimit: {
    control: 'select',
    options: ['1', '2', '3', '4'],
    table: {
      category: 'Typography props',
    },
  },
  showEllipsis: {
    control: 'boolean',
    table: {
      category: 'Typography props',
    },
  },
  /** GLOBAL PROPS */
  id: {
    control: 'text',
    table: {
      category: 'Global props',
    },
  },
  keyId: {
    control: 'text',
    table: {
      category: 'Global props',
    },
  },
  name: {
    control: 'text',
    table: {
      category: 'Global props',
    },
  },
  direction: {
    control: 'select',
    options: ['ltr', 'rtl'],
    table: {
      category: 'Global props',
    },
  },
  attributes: {
    control: 'object',
    description: 'pass any attribute, role, aria,... to the component',
    defaultValue: {
      key: 'value',
    },
    table: {
      category: 'Global props'
    },
  },
  propsFromParent:{
    table: {
      disable: true
    }
  },
  className: {
    table: {
      disable: true
    }
  },
  style: {
    table: {
      disable: true
    }
  },
  testId: {
    table: {
      disable: true
    }
  },
  parents: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true
    }
  },
  xs: {
    control: 'object',
    description: 'object of design props for media query',
    // defaultValue: {gap: '20'}
    table: {category: 'Global props'}
  },
  sm: {
    control: 'object',
    description: 'object of design props for media query',
    // defaultValue: {padding: '20'}
    table: {category: 'Global props'}
  },
  md: {
    control: 'object',
    description: 'object of design props for media query',
    // defaultValue: {marginTop: '30'}
    table: {category: 'Global props'}
  },
  lg: {
    control: 'object',
    description: 'object of design props for media query',
    // defaultValue: {gap: '40'}
    table: {category: 'Global props'}
  },
  xl: {
    control: 'object',
    description: 'object of design props for media query',
    // defaultValue: {padding: '20'}
    table: {category: 'Global props'}
  },
  xxl: {
    control: 'object',
    description: 'object of design props for media query',
    // defaultValue: {marginTop: '30'}
    table: {category: 'Global props'}
  },
  filterValues: {
    control: 'array',
    description: 'Array of values to filter component by when using within FilterContainer',
    table: {category: 'Global props'}
  },
  /** EVENT PROPS */
  onClick: {
    table: {
      category: 'Event props'
    }
  },
  onBlur: {
    table: {
      category: 'Event props'
    }
  },
  onFocus: {
    table: {
      category: 'Event props'
    }
  },
  onKeyDown: {
    table: {
      category: 'Event props'
    }
  },
  onKeyUp: {
    table: {
      category: 'Event props'
    }
  },
  onChange: {
    table: {
      category: 'Event props'
    }
  },
  /** INPUT PROPS */
  innerAttributes: {
    control: 'object',
    description: 'add attributes to inner elements (input, label, ...)',
    table: {category: 'Input props'}
  },
  inputName: {
    control: 'text',
    description: 'name attribute of input',
    table: {category: 'Input props'}
  },
  /** WRAPPER PROPS */
  columns: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '25-75', '75-25', '30-70', '70-30', '40-60', '60-40'],
    table: {category: 'Wrapper props'}
  },
  maxWidth: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '100'],
    table: {category: 'Wrapper props'}
  },
  minWidth: {
    control: 'text',
    table: {category: 'Wrapper props'}
  },
};

/* Window events */
export const windowEventsArgsForStoryBook = {
  onResize: {
    table: { category: "Window event props" },
  },
  onBeforeunload: {
    table: { category: "Window event props" },
  },
  onLoad: {
    table: { category: "Window event props" },
  },
  onUnload: {
    table: { category: "Window event props" },
  },
  onError: {
    table: { category: "Window event props" },
  },
  onOnline: {
    table: { category: "Window event props" },
  },
  onOffline: {
    table: { category: "Window event props" },
  },
};
