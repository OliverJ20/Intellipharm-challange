export const graphData = (fullData) => {
    const data = [
        {
            name: '2000', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2000')) { return data.joined_date }
            }).length,
        },
        {
            name: '2001', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2001')) { return data.joined_date }
            }).length,
        },
        {
            name: '2002', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2002')) { return data.joined_date }
            }).length,
        },
        {
            name: '2003', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2003')) { return data.joined_date }
            }).length,
        },
        {
            name: '2004', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2004')) { return data.joined_date }
            }).length,
        },
        {
            name: '2005', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2005')) { return data.joined_date }
            }).length,
        },
        {
            name: '2006', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2006')) { return data.joined_date }
            }).length,
        },
        {
            name: '2007', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2007')) { return data.joined_date }
            }).length,
        },
        {
            name: '2008', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2008')) { return data.joined_date }
            }).length,
        },
        {
            name: '2009', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2009')) { return data.joined_date }
            }).length,
        },
        {
            name: '2010', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2010')) { return data.joined_date }
            }).length,
        },
        {
            name: '2011', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2011')) { return data.joined_date }
            }).length,
        },
        {
            name: '2012', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2012')) { return data.joined_date }
            }).length,
        },
        {
            name: '2013', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2013')) { return data.joined_date }
            }).length,
        },
        {
            name: '2014', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2014')) { return data.joined_date }
            }).length,
        },
        {
            name: '2015', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2015')) { return data.joined_date }
            }).length,
        },
        {
            name: '2016', signedUp: fullData.filter(function(data) {
                if (data.joined_date.includes('2016')) { return data.joined_date }
            }).length,
        },
    ];

    return data
}
