export const payload = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  version: '1.5',
  type: 'AdaptiveCard',
  speak:
    '<s>Your flight is confirmed for you and 3 other passengers from San Francisco to Amsterdam on Friday, October 10 8:30 AM</s>',
  body: [
    {
      type: 'TextBlock',
      text: 'Passengers',
      weight: 'Bolder',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Sarah Hum',
      separator: true,
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Jeremy Goldberg',
      spacing: 'None',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Evan Litvak',
      spacing: 'None',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: '2 Stops',
      weight: 'Bolder',
      spacing: 'Medium',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: '{{DATE(2017-05-30T19:25:00Z, SHORT)}} {{TIME(2017-05-30T19:25:00Z)}}',
      weight: 'Bolder',
      spacing: 'None',
      wrap: true,
    },
    {
      type: 'ColumnSet',
      separator: true,
      columns: [
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              text: 'San Francisco',
              isSubtle: true,
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              text: 'Amsterdam',
              horizontalAlignment: 'Right',
              isSubtle: true,
              wrap: true,
            },
          ],
        },
      ],
    },
    {
      type: 'ColumnSet',
      spacing: 'None',
      columns: [
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              size: 'ExtraLarge',
              color: 'Accent',
              text: 'SFO',
              spacing: 'None',
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/airplane.png',
              altText: 'Airplane',
              size: 'Small',
              spacing: 'None',
            },
          ],
        },
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              size: 'ExtraLarge',
              color: 'Accent',
              text: 'AMS',
              horizontalAlignment: 'Right',
              spacing: 'None',
              wrap: true,
            },
          ],
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Non-Stop',
      weight: 'Bolder',
      spacing: 'Medium',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: '{{DATE(2017-06-02T20:55:00Z, SHORT)}} {{TIME(2017-06-02T20:55:00Z)}}',
      weight: 'Bolder',
      spacing: 'None',
      wrap: true,
    },
    {
      type: 'ColumnSet',
      separator: true,
      columns: [
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              text: 'Amsterdam',
              isSubtle: true,
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              text: 'San Francisco',
              horizontalAlignment: 'Right',
              isSubtle: true,
              wrap: true,
            },
          ],
        },
      ],
    },
    {
      type: 'ColumnSet',
      spacing: 'None',
      columns: [
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              size: 'ExtraLarge',
              color: 'Accent',
              text: 'AMS',
              spacing: 'None',
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/airplane.png',
              altText: 'Airplane',
              size: 'Small',
              spacing: 'None',
            },
          ],
        },
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              size: 'ExtraLarge',
              color: 'Accent',
              text: 'SFO',
              horizontalAlignment: 'Right',
              spacing: 'None',
              wrap: true,
            },
          ],
        },
      ],
    },
    {
      type: 'ColumnSet',
      spacing: 'Medium',
      columns: [
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              text: 'Total',
              size: 'Medium',
              isSubtle: true,
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          width: 1,
          items: [
            {
              type: 'TextBlock',
              horizontalAlignment: 'Right',
              text: '$4,032.54',
              size: 'Medium',
              weight: 'Bolder',
              wrap: true,
            },
          ],
        },
      ],
    },
  ],
};

export const context = {
  Segments: [
    {
      Id: 1,
      OriginStation: 11235,
      DestinationStation: 13554,
      DepartureDateTime: '2017-05-30T19:25:00Z',
      ArrivalDateTime: '2017-05-30T20:55:00Z',
      Carrier: 881,
      OperatingCarrier: 881,
      Duration: 90,
      FlightNumber: '1463',
      JourneyMode: 'Flight',
      Directionality: 'Outbound',
    },
    {
      Id: 2,
      OriginStation: 13554,
      DestinationStation: 11235,
      DepartureDateTime: '2017-06-02T19:25:00Z',
      ArrivalDateTime: '2017-06-02T20:55:00Z',
      Carrier: 881,
      OperatingCarrier: 881,
      Duration: 90,
      FlightNumber: '1463',
      JourneyMode: 'Flight',
      Directionality: 'Inbound',
    },
  ],
  BookingOptions: [
    {
      BookingItems: [
        {
          AgentID: 4499211,
          Status: 'Current',
          Price: 4032.54,
          Deeplink:
            'https://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5[...]',
          SegmentIds: [1, 2],
        },
      ],
    },
  ],
  Places: [
    {
      Id: 13554,
      ParentId: 4698,
      Code: 'SFO',
      Type: 'Airport',
      Name: 'San Francisco',
    },
    {
      Id: 13558,
      ParentId: 5796,
      Code: 'AMS',
      Type: 'Airport',
      Name: 'Amsterdam',
    },
  ],
  Carriers: [
    {
      Id: 881,
      Code: 'BA',
      Name: 'British Airways',
      ImageUrl: 'https://s1.apideeplink.com/images/airlines/BA.png',
    },
  ],
  Query: {
    Country: 'GB',
    Currency: 'GBP',
    Locale: 'en-gb',
    Adults: 3,
    Children: 0,
    Infants: 0,
    OriginPlace: '2343',
    DestinationPlace: '13554',
    OutboundDate: '2017-05-30',
    InboundDate: '2017-06-02',
    LocationSchema: 'Default',
    CabinClass: 'Economy',
    GroupPricing: false,
  },
};
