# 📜 DPG Criterion 2: Use of Approved Open Licenses

## Overview

**DPG Requirement**: For this indicator, you must provide a public link that explicitly mentions an approved open license for your digital solution. Licenses for Open Software, Open Content, and Open Data are vetted and approved by third-party organizations, and we rely on their criteria in order to include them in our list of acceptable licenses. On top of that, we use SPDX identifiers to easily, efficiently, and uniquely refer to each license.

## License Information

### Primary License

**License**: MIT License  
**SPDX Identifier**: `MIT`  
**License URL**: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)  
**Project License File**: [https://github.com/christex-foundation/pipeline/blob/main/LICENSE](https://github.com/christex-foundation/pipeline/blob/main/LICENSE)

### License Classification

The MIT License is:
- ✅ **OSI Approved**: [Open Source Initiative approved](https://opensource.org/licenses/MIT)
- ✅ **FSF Compatible**: [Free Software Foundation compatible](https://www.gnu.org/licenses/license-list.html#Expat)
- ✅ **SPDX Listed**: [SPDX License List approved](https://spdx.org/licenses/MIT.html)
- ✅ **DPG Approved**: Listed in DPGA approved licenses

## License Coverage

### Source Code License
All source code for DPG Pipeline is licensed under the MIT License:

```
MIT License

Copyright (c) 2024 Christex Foundation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Documentation License
All documentation, including this file, is licensed under:

**License**: Creative Commons Attribution 4.0 International (CC BY 4.0)  
**SPDX Identifier**: `CC-BY-4.0`  
**License URL**: [https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)

### Data License
Data generated and collected by the platform is made available under:

**License**: Creative Commons Zero v1.0 Universal (CC0 1.0)  
**SPDX Identifier**: `CC0-1.0`  
**License URL**: [https://creativecommons.org/publicdomain/zero/1.0/](https://creativecommons.org/publicdomain/zero/1.0/)

## Dependency License Compliance

### Open Source Dependencies
All project dependencies use DPG-approved open licenses:

#### Core Framework Dependencies
- **SvelteKit**: MIT License (`MIT`)
- **Svelte**: MIT License (`MIT`)
- **Vite**: MIT License (`MIT`)
- **Node.js**: MIT License (`MIT`)

#### UI and Styling Dependencies
- **TailwindCSS**: MIT License (`MIT`)
- **PostCSS**: MIT License (`MIT`)
- **Autoprefixer**: MIT License (`MIT`)
- **Lucide Svelte**: ISC License (`ISC`)

#### Development Dependencies
- **TypeScript**: Apache License 2.0 (`Apache-2.0`)
- **Prettier**: MIT License (`MIT`)
- **Vitest**: MIT License (`MIT`)
- **ESLint**: MIT License (`MIT`)

#### Backend Dependencies
- **Supabase JS**: MIT License (`MIT`)
- **Axios**: MIT License (`MIT`)
- **Zod**: MIT License (`MIT`)
- **Date-fns**: MIT License (`MIT`)

### License Compatibility Matrix

| Component | License | DPG Approved | Compatible with MIT |
|-----------|---------|--------------|-------------------|
| **Core Application** | MIT | ✅ | ✅ |
| **Documentation** | CC-BY-4.0 | ✅ | ✅ |
| **Data Exports** | CC0-1.0 | ✅ | ✅ |
| **Dependencies** | Various (MIT, Apache-2.0, ISC, BSD) | ✅ | ✅ |

## License Verification

### Automated License Checking
We use automated tools to ensure license compliance:

```json
{
  "scripts": {
    "license-check": "license-checker --onlyAllow 'MIT;Apache-2.0;BSD-2-Clause;BSD-3-Clause;ISC;CC0-1.0;CC-BY-4.0'",
    "license-report": "license-checker --csv > license-report.csv"
  }
}
```

### Manual Verification Process
1. **Quarterly Reviews**: Manual review of all new dependencies
2. **License Scanning**: Automated scanning on CI/CD pipeline
3. **Community Reporting**: Issue reporting system for license concerns
4. **Legal Review**: Annual legal review of license compliance

## Public License Declaration

### Repository License Files
- **Main License**: [/LICENSE](https://github.com/christex-foundation/pipeline/blob/main/LICENSE)
- **Package.json**: License field specified as "MIT"
- **README.md**: License badge and reference
- **Documentation**: License notice in each documentation file

### License Visibility
The MIT License is prominently displayed:
- ✅ Root directory LICENSE file
- ✅ Package.json license field
- ✅ README.md license badge
- ✅ Repository license indicator on GitHub
- ✅ Source code license headers (where applicable)

## Third-Party Content Licensing

### Assets and Media
- **Icons**: Lucide icons (ISC License)
- **Fonts**: Space Grotesk (Open Font License)
- **Images**: Original content or CC0 licensed
- **Brand Assets**: Original Christex Foundation assets

### External Services Integration
- **Supabase**: Service usage under ToS, client library under MIT
- **Vercel**: Service usage under ToS, no proprietary dependencies
- **GitHub**: Service usage under ToS, API under GitHub ToS
- **OpenAI**: Service usage under ToS, no proprietary client libraries

## License Compliance Monitoring

### Continuous Monitoring
- **CI/CD Integration**: License checking in build pipeline
- **Dependency Updates**: Automated license verification on updates
- **Security Audits**: Regular security and license audits
- **Community Oversight**: Public repository for community oversight

### Reporting and Documentation
- **License Report**: [Generated quarterly](./LICENSE_REPORT.md) (To be created)
- **Compliance Log**: [Historical compliance records](./LICENSE_COMPLIANCE_LOG.md) (To be created)
- **Issue Tracking**: GitHub issues for license-related concerns

## License Evolution and Updates

### Change Management
- **Version Control**: All license changes tracked in git history
- **Community Notification**: License changes communicated to community
- **Backward Compatibility**: Ensuring existing users retain rights
- **Legal Review**: All license changes reviewed by legal counsel

### Future Considerations
- **Additional Components**: New features will maintain DPG-approved licensing
- **User-Generated Content**: Clear licensing terms for user contributions
- **Data Licensing**: Ongoing evaluation of data licensing best practices
- **International Compliance**: Monitoring international licensing requirements

## Evidence Links

### Primary Evidence
- **GitHub Repository**: [https://github.com/christex-foundation/pipeline](https://github.com/christex-foundation/pipeline)
- **License File**: [https://github.com/christex-foundation/pipeline/blob/main/LICENSE](https://github.com/christex-foundation/pipeline/blob/main/LICENSE)
- **Package.json**: [https://github.com/christex-foundation/pipeline/blob/main/package.json](https://github.com/christex-foundation/pipeline/blob/main/package.json)

### Supporting Evidence
- **SPDX License Reference**: [https://spdx.org/licenses/MIT.html](https://spdx.org/licenses/MIT.html)
- **OSI License Page**: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
- **GitHub License Display**: [Repository license indicator](https://github.com/christex-foundation/pipeline)

## Best Practices Implementation

### License Communication
- **Clear Attribution**: Proper attribution in all distribution
- **License Notices**: Comprehensive license notices in documentation
- **User Education**: Help documentation explaining licensing
- **Developer Guidelines**: Clear guidelines for contributors on licensing

### Community Engagement
- **Open Contribution**: Welcoming community contributions under compatible licenses
- **License FAQ**: [Documentation addressing common licensing questions](./LICENSE_FAQ.md) (To be created)
- **Legal Resources**: Links to legal resources for understanding MIT License
- **Support Channels**: Clear channels for licensing questions and concerns

## Conclusion

DPG Pipeline fully complies with DPG Criterion 2 through:

1. **Approved License**: Use of MIT License (SPDX: MIT), which is DPG-approved
2. **Public Declaration**: Clear, publicly accessible license declaration
3. **Comprehensive Coverage**: All components covered by approved open licenses
4. **Dependency Compliance**: All dependencies use compatible open licenses
5. **Transparent Process**: Open source development with public license tracking
6. **Community Oversight**: Public repository enabling community license verification

The MIT License provides maximum freedom for users while ensuring the project remains truly open source and DPG-compliant.

---

*This document serves as evidence for DPG Criterion 2 compliance. All license information is kept current and publicly accessible.*