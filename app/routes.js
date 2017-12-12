var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/verify', (req, res) => {
  res.render('govuk-verify/index')
})

router.get('/how-to-connect', (req, res) => {
  res.render('task-list/index', {
    'steps': [ 
      [{ 
          'name': 'Before you start',
          'subtasks': [
            {
              'name': 'Learn how Verify works',
              'href': 'https://gov.uk/verify'
            },
            {
              'name': 'Understand if your users need identity assurance',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Share an initial proposal about how your service will use Verify',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Learn about the Verify architecture',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/arch/arch.html'
            }
          ]
        }
      ],
        [{
          'name': 'Needs analysis',
          'subtasks': [
            {
              'name': 'Complete a full risk assessment and confirm your need for GOV.UK Verify',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage2/completeRiskAssessment.html'
            },
            {
              'name': 'Confirm the level of assurance your service requires',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage2/confirmLevelAssurance.html#confirmlevelassurance'
            },
            {
              'name': 'Share a recent privacy impact assessment',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage2/privacyImpactAssessment.html#privacyimpactassessment'
            },
            {
              'name': 'Read the code of interoperability (CoIn) and raise any queries with the Verify team',
              'href': 'https://www.gov.uk/government/publications/govuk-verify-code-of-interoperability'
            }
          ]
        },
          {
          'name': 'Technical needs analysis',
          'subtasks': [
            {
              'name': 'Matching  needs',
              'href': ''
            }
          ]
        }],
        [{
          'name': 'Planning',
          'subtasks': [
            {
              'name': 'Share your plan for integrating Verify into your service',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage3/integratingPlan.html#integratingplan'
            },
            {
              'name': 'Share the operational support model for your service',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage3/operationalSupportModel.html#operationalsupportmodel'
            },
            {
              'name': 'Your communications plan for integrating GOV.UK Verify into your service',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage3/communicationsPlan.html#communicationsplan'
            }
          ]
        },{
          'name': 'Technical Planning',
          'subtasks': [
            {
              'name': 'Understand what your service needs to build',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/steps/steps.html#development'
            },
            {
              'name': 'Plan how you will do development',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/steps/steps.html#development'
            },
            {
              'name': 'Define your matching strategy',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/ms/msBuild.html#define-your-matching-strategy'
            }
          ]
        },{
          'name': 'Research and design your service with Verify',
          'subtasks': [
            {
              'name': 'Decide where verify fits into your service design',
              'href': '/not-implemented'
            },
            {
              'name': 'Connect your service to the Verify demo',
              'href': '/not-implemented'
            }]
        }
        ],[
          { 
          'name': 'Integrate Verify to your service',
          'subtasks': [
            {
              'name': 'Set up your service to send and receive messages from Verify',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/index.html'
            },
            {
              'name': 'Test that your service can send and receive messages from Verify',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/saml/samlComplianceTool.html'
            }
          ]
          }],
          [{ 
          'name': 'Connect to a test environment',
          'subtasks': [
            {
              'name': 'Request certificates from the Verify PKI',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/pki/pkiRequestCert.html#pkirequestcert'
            },
            {
              'name': 'Request access to the Verify Integration environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/env/envRequestform.html#envrequestform'
            },
            {
              'name': 'Configure the Matching Service Adapter for the Integration environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/msa/msaUse.html#configuremsa'
            },
            {
              'name': 'Configure your service for the Integration environment',
              'href': ''
            }
          ]
        },
        { 
          'name': 'Prepare for production',
          'subtasks': [
            {
              'name': 'Sign the CoIn and share with Verify',
              'href': 'https://www.gov.uk/government/publications/govuk-verify-code-of-interoperability'
            },
            {
              'name': "Send us a description of your service's volumes and demographics",
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': "Share your ongoing communcations plan",
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage5/ongoingCommunicationsPlan.html#ongoingcommunicationsplan'
            }
          ]
        }],
        [{ 
          'name': 'Connect Verify to your production service',
          'subtasks': [
            {
              'name': 'Request certificates from the Verify PKI for production',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/pki/pkiRequestCert.html#pkirequestcert'
            },
            {
              'name': 'Request access to the production Verify environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/env/envRequestform.html#envrequestform'
            },
            {
              'name': 'Configure the Matching Service Adapter for the Integration environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/msa/msaUse.html#configuremsa'
            },
            {
              'name': 'Configure your service for the production environment',
              'href': ''
            }
          ]
        }]
    ]
  })
})

router.get('/how-to-connect/not-implemented', (req, res) => {
  res.render('task-list/not-implemented')
})

module.exports = router

