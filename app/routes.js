var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/verify', (req, res) => {
  res.render('govuk-verify/index')
})

router.get('/verify/get-started-check-verify-is-right', (req, res) => {
  res.render('govuk-verify/get-started-check-verify-is-right')
})

router.get('/verify/get-started-understand-how-verify-works', (req, res) => {
  res.render('govuk-verify/get-started-understand-how-verify-works')
})

router.get('/verify/get-started-share-information', (req, res) => {
  res.render('govuk-verify/get-started-share-information')
})

router.get('/verify/get-started-connect-your-service', (req, res) => {
  res.render('govuk-verify/get-started-connect-your-service')
})

router.get('/verify/documentation', (req, res) => {
  res.render('govuk-verify/documentation')
})

router.get('/verify/support', (req, res) => {
  res.render('govuk-verify/support')
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
              'name': 'Check if your users need identity assurance',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Learn about the Verify architecture',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/arch/arch.html'
            },
            {
              'name': 'Tell us how you want to use Verify',
              'href': '/how-to-connect/not-implemented'
            }
          ]
        }
      ],
        [{
          'name': 'Assess risk and assurance needs',
          'subtasks': [
            {
              'name': 'Complete a risk assessment',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage2/completeRiskAssessment.html'
            },
            {
              'name': 'Confirm the level of assurance you need',
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
        }],
        [{
          'name': 'Plan how to add Verify to your service',
          'subtasks': [
            {
              'name': 'Tell us how you want to match users\' data',
              'href': ''
            },
            {
              'name': 'Let us know how you plan to integrate Verify into you service',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage3/integratingPlan.html#integratingplan'
            },
            {
              'name': 'Let us know how you want to operate and support Verify in your service',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage3/operationalSupportModel.html#operationalsupportmodel'
            },
            {
              'name': 'Let us know how you\'re going to tell users about Verify',
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage3/communicationsPlan.html#communicationsplan'
            }
          ]
        },{
          'name': 'Plan your technical integration',
          'subtasks': [
            {
              'name': 'Understand what you need to build',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/steps/steps.html#development'
            },
            {
              'name': 'Plan how you will do development',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/steps/steps.html#development'
            },
            {
              'name': 'Decide your data matching strategy',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/ms/msBuild.html#define-your-matching-strategy'
            }
          ]
        },{
          'name': 'Research and design your service with Verify',
          'subtasks': [
            {
              'name': 'Decide where verify fits into your service\'s user journey',
              'href': '/not-implemented'
            },
            {
              'name': 'Try out your service with a Verify demo',
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
              'name': 'Request certificates from Verify\'s Public Key Infrastructure (PKI)',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/pki/pkiRequestCert.html#pkirequestcert'
            },
            {
              'name': 'Request access to the Verify test environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/env/envRequestform.html#envrequestform'
            },
            {
              'name': 'Configure the Matching Service Adapter for the test environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/msa/msaUse.html#configuremsa'
            },
            {
              'name': 'Configure your service for the test environment',
              'href': ''
            }
          ]
        },
        {
          'name': 'Prepare for the production environment',
          'subtasks': [
            {
              'name': 'Sign the Code of Interoperability (CoIn) and share with us',
              'href': 'https://www.gov.uk/government/publications/govuk-verify-code-of-interoperability'
            },
            {
              'name': "Send us a description of your service's volumes and demographics",
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': "Let us know how you're going to tell users about Verify",
              'href': 'http://alphagov.github.io/identity-assurance-documentation/stage5/ongoingCommunicationsPlan.html#ongoingcommunicationsplan'
            }
          ]
        }],
        [{
          'name': 'Connect Verify to your production service',
          'subtasks': [
            {
              'name': 'Request certificates from the Verify Public Key Infrastructure (PKI) for production',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/pki/pkiRequestCert.html#pkirequestcert'
            },
            {
              'name': 'Request access to the production environment',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/env/envRequestform.html#envrequestform'
            },
            {
              'name': 'Configure the Matching Service Adapter for the production environment',
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

router.get('/connect-to-verify-2/settings/service-certificates/obsolete', (req, res) => {
  res.render('connect-to-verify-2/settings/service-certificates', {revoked: true})
})
router.get('/connect-to-verify-2/settings/matching-service-certificates/obsolete', (req, res) => {
  res.render('connect-to-verify-2/settings/matching-service-certificates', {revoked: true})
})
router.get('/connect-to-verify-2/settings/service-certificates/upload', (req, res) => {
  res.render('connect-to-verify-2/settings/upload-certificate', {settingsPage: 'service-certificates'})
})
router.get('/connect-to-verify-2/settings/matching-service-certificates/upload', (req, res) => {
  res.render('connect-to-verify-2/settings/upload-certificate', {settingsPage: 'matching-service-certificates'})
})

router.get('/how-to-connect/not-implemented', (req, res) => {
  res.render('task-list/not-implemented')
})

module.exports = router
