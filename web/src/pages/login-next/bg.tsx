import './index.less';

const aspectRatio = {
  top: 240,
  middle: 466,
  bottom: 704,
};

export const BgSvg = () => {
  const StaticFill = (
    path: string,
    type: keyof typeof aspectRatio,
    fillColor: string = '#00BEB4',
    opacity: number = 0.12,
  ) => {
    // Close the path by connecting the end point back to the start
    const closedPath = `${path} L0,${aspectRatio[type]} L0,0 Z`;

    return (
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 1440 ${aspectRatio[type]}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={closedPath} fill={fillColor} opacity={opacity} />
      </svg>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 right-0 w-full">
        {/* Top section */}
        <div
          className="w-full ml-10"
          style={{ height: `${aspectRatio.top}px` }}
        >
          {StaticFill(
            'M1282.81 -45L999.839 147.611C988.681 155.206 975.496 159.267 961.999 159.267H746.504H330.429C317.253 159.267 304.368 155.397 293.373 148.137L0.88623 -45',
            'top',
            '#00BEB4',
            0.08,
          )}
        </div>

        {/* Middle section */}
        <div
          className="w-full -mt-48"
          style={{ height: `${aspectRatio.middle}px` }}
        >
          {StaticFill(
            'M0 1L203.392 203.181C215.992 215.705 233.036 222.736 250.802 222.736H287.103C305.94 222.736 323.913 230.636 336.649 244.514L425.401 341.222C438.137 355.1 456.11 363 474.947 363H976.902C996.333 363 1014.81 354.595 1027.59 339.95L1104.79 251.424C1116.14 238.4 1132.08 230.248 1149.29 228.659L1191.13 224.796C1205.62 223.458 1219.28 217.461 1230.06 207.704L1440 17.7981',
            'middle',
            '#00BEB4',
            0.12,
          )}
        </div>

        {/* Bottom section */}
        <div
          className="w-full -mt-72"
          style={{ height: `${aspectRatio.bottom}px` }}
        >
          {StaticFill(
            'M-10 1L57.1932 71.1509C67.7929 82.2171 74.2953 96.5714 75.6239 111.837L79.8042 159.87C81.3312 177.416 89.68 193.662 103.057 205.117L399.311 458.829C411.497 469.265 427.011 475 443.054 475H972.606C988.463 475 1003.81 469.396 1015.94 459.179L1310.78 210.75C1323.01 200.451 1331.16 186.136 1333.79 170.369L1341.87 121.837C1344.06 108.691 1350.11 96.492 1359.24 86.7885L1440 1',
            'bottom',
            '#00BEB4',
            0.16,
          )}
        </div>
      </div>
    </div>
  );
};
