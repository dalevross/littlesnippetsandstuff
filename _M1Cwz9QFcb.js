if (self.CavalryLogger) {
    CavalryLogger.start_js(["RVC2g"]);
}

__d("VideoCopyrightMatchStatus", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NEW_MATCH: "NEW_MATCH",
        REPORTED: "REPORTED",
        ALLOWED: "ALLOWED",
        ADDED_MATCH: "ADDED_MATCH",
        REMOVED: "REMOVED",
        IN_DISPUTE: "IN_DISPUTE",
        BLOCKED: "BLOCKED",
        CLAIMED: "CLAIMED",
        MONITORED: "MONITORED",
        MANUAL_REVIEW: "MANUAL_REVIEW",
        REPORTED_OR_REMOVED: "REPORTED_OR_REMOVED",
        OTHER: "OTHER"
    }
}
), null);
__d("VideoCopyrightRuleGraphFields", [], (function(a, b, c, d, e, f) {
    e.exports = {
        ID: "id",
        NAME: "name",
        MIGRATION_RULE_ID: "migration_rule_id",
        COPYRIGHTS: "copyrights",
        CONDITION_GROUPS: "condition_groups",
        CREATOR: "creator",
        CREATED_DATE: "created_date",
        COPYRIGHTS_COUNT: "copyrights_count",
        MATCHES_COUNT: "matches_count",
        IS_IN_MIGRATION: "is_in_migration",
        IS_NEW_VERSION_RULE: "is_new_version_rule",
        EXCLUDED_COPYRIGHT_IDS: "excluded_copyright_ids",
        ACTION: "action",
        CONDITIONS: "conditions",
        VALIDITY_STATUS: "validity_status",
        TYPE: "type",
        OPERATOR: "operator",
        VALUE: "value"
    }
}
), null);
__d("VideoReferenceMatchState", [], (function(a, b, c, d, e, f) {
    e.exports = {
        CONFLICT: "CONFLICT",
        DISPUTED: "DISPUTED",
        DISPUTE_ACCEPTED: "DISPUTE_ACCEPTED",
        DISPUTE_REJECTED: "DISPUTE_REJECTED",
        CONFLICT_RESOLVED: "CONFLICT_RESOLVED",
        AUTO_RESOLVED: "AUTO_RESOLVED",
        INACTIVE: "INACTIVE",
        DISPUTE_EXPIRED: "DISPUTE_EXPIRED",
        OPS_RESOLVED: "OPS_RESOLVED",
        CONFLICT_EXPIRED: "CONFLICT_EXPIRED",
        POSSIBLE_CONFLICT: "POSSIBLE_CONFLICT",
        OWNERSHIP_ASSERTED: "OWNERSHIP_ASSERTED"
    }
}
), null);
__d("PageContentTabDeleteStoryMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            kind: "LocalArgument",
            name: "input",
            type: "StoryDeleteData!",
            defaultValue: null
        }]
          , b = [{
            kind: "LinkedField",
            alias: null,
            name: "story_delete",
            storageKey: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "StoryDeleteResponsePayload",
            plural: !1,
            selections: [{
                kind: "ScalarField",
                alias: null,
                name: "deleted_story_id",
                args: null,
                storageKey: null
            }]
        }];
        return {
            kind: "Request",
            fragment: {
                kind: "Fragment",
                name: "PageContentTabDeleteStoryMutation",
                type: "Mutation",
                metadata: null,
                argumentDefinitions: a,
                selections: b
            },
            operation: {
                kind: "Operation",
                name: "PageContentTabDeleteStoryMutation",
                argumentDefinitions: a,
                selections: b
            },
            params: {
                operationKind: "mutation",
                name: "PageContentTabDeleteStoryMutation",
                id: "2561201843898150",
                text: null,
                metadata: {}
            }
        }
    }();
    e.exports = a
}
), null);
__d("PostScheduleDialog.react", ["cx", "fbt", "DatePickerRestraints", "React", "ReactLayeredComponentMixin_DEPRECATED", "XUIDateTimePicker.react", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react", "XUIGrayText.react", "XUINotice.react", "cxMargin"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    a = b("React").PropTypes;
    var i = 60 * 1e3
      , j = 24 * 60 * 60 * 1e3
      , k = 30;
    c = b("React").createClass({
        displayName: "PostScheduleDialog",
        mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
        propTypes: {
            showAtStart: a.bool,
            initialDate: a.instanceOf(Date),
            isReschedule: a.bool,
            timezoneStr: a.string.isRequired,
            onSubmit: a.func.isRequired,
            defaultScheduledTimeDelta: a.number,
            submitLabel: a.string
        },
        getDefaultProps: function() {
            return {
                defaultScheduledTimeDelta: 11 * i
            }
        },
        getInitialState: function() {
            return {
                shown: this.props.showAtStart,
                date: this.props.initialDate ? this.props.initialDate : new Date(Date.now() + this.props.defaultScheduledTimeDelta)
            }
        },
        show: function() {
            this.setState({
                shown: !0,
                date: this.props.initialDate ? this.props.initialDate : new Date(Date.now() + this.props.defaultScheduledTimeDelta)
            })
        },
        renderLayers: function() {
            var a = new Date(Date.now() - j)
              , c = new Date(Date.now() + 6 * k * j)
              , d = this._isSelectedTimeValid(this.state.date.getTime())
              , e = this.props.isReschedule ? h._("Reschedule Post") : h._("Schedule Post")
              , f = this.props.submitLabel ? this.props.submitLabel : this.props.isReschedule ? h._("Reschedule") : h._("Schedule");
            return b("React").jsxs(b("XUIDialog.react"), {
                shown: this.state.shown,
                width: 343,
                children: [b("React").jsx(b("XUIDialogTitle.react"), {
                    children: e
                }), b("React").jsxs(b("XUIDialogBody.react"), {
                    className: "_hg8",
                    children: [b("React").jsx(b("XUIGrayText.react"), {
                        shade: "light",
                        size: "meta1",
                        display: "block",
                        children: h._("Select a date and time in the future for when you want your post to be published.")
                    }), b("React").jsx(b("XUIDateTimePicker.react"), {
                        allowEmpty: !1,
                        dateRestraints: [b("DatePickerRestraints").enforceDateIsNoEarlierThan(a), b("DatePickerRestraints").enforceDateIsNoLaterThan(c)],
                        className: "_3-8x",
                        date: this.state.date,
                        onChange: this._onChange,
                        timezone: this.props.timezoneStr
                    }), b("React").jsx(b("XUINotice.react"), {
                        use: "warn",
                        className: "_3-8x" + (d ? " hidden_elem" : ""),
                        children: h._("Scheduled posts need to be shared between 10 minutes and 6 months from when you create them.")
                    })]
                }), b("React").jsxs(b("XUIDialogFooter.react"), {
                    children: [b("React").jsx(b("XUIDialogCancelButton.react"), {}), b("React").jsx(b("XUIDialogButton.react"), {
                        action: "confirm",
                        label: f,
                        onClick: this._onSubmitClick,
                        disabled: !d,
                        use: "confirm"
                    })]
                })]
            })
        },
        render: function() {
            return b("React").jsx("div", {})
        },
        _onChange: function(a) {
            this.setState({
                date: a
            })
        },
        _onSubmitClick: function() {
            this.props.onSubmit(this.state.date),
            this.setState({
                shown: !1
            })
        },
        _isSelectedTimeValid: function(a) {
            var b = Date.now() + 10 * i
              , c = Date.now() + 6 * k * j;
            return a > b && a < c
        }
    });
    e.exports = c
}
), null);
__d("AdBreakPortalTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:AdBreakPortalLoggerConfig", this.$1, b("Banzai").BASIC)
        }
        ;
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:AdBreakPortalLoggerConfig", this.$1, b("Banzai").VITAL)
        }
        ;
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:AdBreakPortalLoggerConfig", this.$1, {
                signal: !0
            })
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setAdBreakOnboardingEntryPoint = function(a) {
            this.$1.ad_break_onboarding_entry_point = a;
            return this
        }
        ;
        c.setAdBreakPortalEventType = function(a) {
            this.$1.ad_break_portal_event_type = a;
            return this
        }
        ;
        c.setAdBreakPortalVersion = function(a) {
            this.$1.ad_break_portal_version = a;
            return this
        }
        ;
        c.setBusinessID = function(a) {
            this.$1.business_id = a;
            return this
        }
        ;
        c.setEligibilitySource = function(a) {
            this.$1.eligibility_source = a;
            return this
        }
        ;
        c.setEmail = function(a) {
            this.$1.email = a;
            return this
        }
        ;
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        }
        ;
        c.setFeID = function(a) {
            this.$1.fe_id = a;
            return this
        }
        ;
        c.setFinanceAdmins = function(a) {
            this.$1.finance_admins = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setInsightsEndTime = function(a) {
            this.$1.insights_end_time = a;
            return this
        }
        ;
        c.setInsightsFetchTime = function(a) {
            this.$1.insights_fetch_time = a;
            return this
        }
        ;
        c.setInsightsStartTime = function(a) {
            this.$1.insights_start_time = a;
            return this
        }
        ;
        c.setIsPageSearched = function(a) {
            this.$1.is_page_searched = a;
            return this
        }
        ;
        c.setIsPayoutDifferentFromBm = function(a) {
            this.$1.is_payout_different_from_bm = a;
            return this
        }
        ;
        c.setIsPayoutErrorForPage = function(a) {
            this.$1.is_payout_error_for_page = a;
            return this
        }
        ;
        c.setIsPayoutSetup = function(a) {
            this.$1.is_payout_setup = a;
            return this
        }
        ;
        c.setNotifSubtype = function(a) {
            this.$1.notif_subtype = a;
            return this
        }
        ;
        c.setOneTimePasscode = function(a) {
            this.$1.one_time_passcode = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setProgramAdmins = function(a) {
            this.$1.program_admins = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setRecipientID = function(a) {
            this.$1.recipient_id = a;
            return this
        }
        ;
        c.setSearchQuery = function(a) {
            this.$1.search_query = a;
            return this
        }
        ;
        c.setSignUpErrors = function(a) {
            this.$1.sign_up_errors = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        }
        ;
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        }
        ;
        return a
    }();
    c = {
        ad_break_onboarding_entry_point: !0,
        ad_break_portal_event_type: !0,
        ad_break_portal_version: !0,
        business_id: !0,
        eligibility_source: !0,
        email: !0,
        exception_message: !0,
        fe_id: !0,
        finance_admins: !0,
        insights_end_time: !0,
        insights_fetch_time: !0,
        insights_start_time: !0,
        is_page_searched: !0,
        is_payout_different_from_bm: !0,
        is_payout_error_for_page: !0,
        is_payout_setup: !0,
        notif_subtype: !0,
        one_time_passcode: !0,
        page_id: !0,
        program_admins: !0,
        recipient_id: !0,
        search_query: !0,
        sign_up_errors: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}
), null);
__d("XBrandedContentPageSettingsUpdateCreatorController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/branded_content/page_settings/add_creator/", {
        brand_page_id: {
            type: "FBID"
        },
        creator_id_to_update: {
            type: "FBID"
        },
        is_add: {
            type: "Bool",
            defaultValue: !1
        },
        add_whitelist_channel: {
            type: "String"
        }
    })
}
), null);
__d("PageContentTabBrandedContentUtils", ["ActorURI", "AsyncRequest", "XBrandedContentPageSettingsUpdateCreatorController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        postAccepted: function(a, c, d) {
            d = b("ActorURI").create(b("XBrandedContentPageSettingsUpdateCreatorController").getURIBuilder().getURI(), a);
            new (b("AsyncRequest"))().setURI(d).setMethod("POST").setData({
                is_add: !0,
                brand_page_id: a,
                creator_id_to_update: c,
                add_whitelist_channel: "page_publishing_tool"
            }).send()
        }
    };
    e.exports = a
}
), null);
__d("PageContentTabDeleteStoryMutation", ["RelayFBEnvironment", "RelayModern", "createCommitMutation", "PageContentTabDeleteStoryMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    b("RelayModern").graphql;
    a = b("createCommitMutation").createCommitMutation;
    e.exports = a(b("RelayFBEnvironment"), {
        mutation: g !== void 0 ? g : g = b("PageContentTabDeleteStoryMutation.graphql")
    })
}
), null);
__d("PageContentTabDispatcher", ["Dispatcher_DEPRECATED", "PageContentTabConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("PageContentTabConstants").ACTION_TYPES
      , h = b("PageContentTabConstants").PAYLOAD_SOURCES
      , i = b("PageContentTabConstants").TABS;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.handleServerResponse = function(a) {
            this.dispatch({
                action: a,
                payloadSource: h.SERVER
            })
        }
        ;
        c.handleViewAction = function(a) {
            this.dispatch({
                action: a,
                payloadSource: h.VIEW_ACTION
            })
        }
        ;
        c.handleInitialization = function(a, b, c, d) {
            if (a.externalURI)
                return;
            this.dispatch({
                action: {
                    posts: {
                        key: b,
                        data: c
                    },
                    actionType: g.ADD_POSTS,
                    tab: a,
                    pageID: d
                },
                payloadSource: h.SERVER
            })
        }
        ;
        c.handlePostRemoved = function(a, b, c) {
            var d = this;
            c ? this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    actionType: g.REMOVE_POST,
                    postID: b,
                    tab: c,
                    pageID: a
                }
            }) : Object.keys(i).forEach(function(c) {
                return d.dispatch({
                    payloadSource: h.VIEW_ACTION,
                    action: {
                        actionType: g.REMOVE_POST,
                        postID: b,
                        tab: c,
                        pageID: a
                    }
                })
            }, this)
        }
        ;
        c.handlePostsRemoved = function(a, b, c) {
            var d = this;
            c ? this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    actionType: g.REMOVE_POSTS,
                    postIDs: b,
                    tab: c,
                    pageID: a
                }
            }) : Object.keys(i).forEach(function(c) {
                return d.dispatch({
                    payloadSource: h.VIEW_ACTION,
                    action: {
                        actionType: g.REMOVE_POSTS,
                        postIDs: b,
                        tab: c,
                        pageID: a
                    }
                })
            })
        }
        ;
        c.handlePostsMoved = function(a, b, c, d) {
            if (c === d)
                return;
            var e = [];
            b.forEach(function(a) {
                e.push(a.id)
            });
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    actionType: g.REMOVE_POSTS,
                    postIDs: e,
                    tab: c,
                    pageID: a
                }
            });
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: d,
                    actionType: g.CREATE_POSTS,
                    posts: b,
                    pageID: a
                }
            })
        }
        ;
        c.handlePageInitialization = function(a) {
            this.dispatch({
                payloadSource: h.SERVER,
                action: {
                    page: a,
                    actionType: g.INIT_PAGE
                }
            })
        }
        ;
        c.handlePostCreated = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: a,
                    actionType: g.CREATE_POST,
                    post: b,
                    pageID: c
                }
            })
        }
        ;
        c.handlePostsCreated = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: a,
                    actionType: g.CREATE_POSTS,
                    posts: b,
                    pageID: c
                }
            })
        }
        ;
        c.handlePostChanged = function(a, b, c, d) {
            this.dispatch({
                payloadSource: h.SERVER,
                action: {
                    actionType: g.EDIT_POSTS,
                    isViewedUpdated: d,
                    posts: [a],
                    tab: b,
                    pageID: c
                }
            })
        }
        ;
        c.handlePostsChanged = function(a, b, c, d) {
            this.dispatch({
                payloadSource: h.SERVER,
                action: {
                    actionType: g.EDIT_POSTS,
                    isViewedUpdated: d,
                    posts: a,
                    tab: b,
                    pageID: c
                }
            })
        }
        ;
        c.handleStaleContentNoticeStatus = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.UPDATE_STALE_CONTENT_NOTICE,
                    status: c,
                    pageID: a
                }
            })
        }
        ;
        c.handleFilterStatus = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.UPDATE_FILTER_STATUS,
                    status: c,
                    pageID: a
                }
            })
        }
        ;
        c.handleSetCustomTabState = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: a,
                    actionType: g.SET_CUSTOM_TAB_STATE,
                    customTabState: b,
                    pageID: c
                }
            })
        }
        ;
        c.handleError = function(a, b, c) {
            this.dispatch({
                payloadSource: h.SERVER,
                action: {
                    tab: a,
                    actionType: g.ERROR,
                    error: b,
                    pageID: c
                }
            })
        }
        ;
        c.handlePagingChanged = function(a, b, c, d) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    pageID: a,
                    actionType: g.PAGING_CHANGED,
                    currentPage: d,
                    queryKey: c
                }
            })
        }
        ;
        c.handleQueryKeyChanged = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.QUERY_KEY_CHANGED,
                    pageID: a,
                    queryKey: c
                }
            })
        }
        ;
        c.handleQueryChanged = function(a, b, c) {
            if (c.trim() === "")
                return;
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.QUERY_CHANGED,
                    pageID: a,
                    query: c
                }
            })
        }
        ;
        c.handleFilterChanged = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.FILTER_CHANGED,
                    pageID: a,
                    filter: c
                }
            })
        }
        ;
        c.handleSortChanged = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.SORT_CHANGED,
                    pageID: a,
                    sort: c
                }
            })
        }
        ;
        c.handleBringPostToTop = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: a,
                    actionType: g.BRING_POST_TO_TOP,
                    post: b,
                    pageID: c
                }
            })
        }
        ;
        c.handleSetVideoListID = function(a, b, c) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: b,
                    actionType: g.SET_VIDEO_LIST_ID,
                    pageID: a,
                    videoListID: c
                }
            })
        }
        ;
        c.handleSetVideoListHeaderInfo = function(a, b) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: a,
                    actionType: g.SET_VIDEO_LIST_HEADER_INFO,
                    headerInfo: b
                }
            })
        }
        ;
        c.handleRequestVideoListHeaderInfo = function(a) {
            this.dispatch({
                payloadSource: h.VIEW_ACTION,
                action: {
                    tab: a,
                    actionType: g.REQUEST_VIDEO_LIST_HEADER_INFO
                }
            })
        }
        ;
        c.handleDynamicTabAdded = function(a, b) {
            this.dispatch({
                action: {
                    actionType: g.DYNAMIC_TAB_ADDED,
                    tabName: a,
                    tabConfig: b
                }
            })
        }
        ;
        return b
    }(b("Dispatcher_DEPRECATED"));
    e.exports = new a()
}
), null);
__d("PageContentTabActions", ["errorCode", "fbt", "Arbiter", "GraphAPI", "PageContentTabAccessToken", "PageContentTabBrandedContentUtils", "PageContentTabCommonConfig", "PageContentTabConfig", "PageContentTabConstants", "PageContentTabDeleteStoryMutation", "PageContentTabDispatcher", "PageContentTabLoadingDialog", "PageContentTabLogger", "promiseDone"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = b("PageContentTabConstants").ACTIONS
      , j = b("PageContentTabConstants").TABS
      , k = b("PageContentTabConfig").graph_api_version || "2.2"
      , l = 10;
    a = {
        backdatePost: function(a, c, d, f, g, j) {
            b("PageContentTabLoadingDialog").show();
            f = new Date(f,g - 1,j);
            b("promiseDone")(b("GraphAPI")(k, e.id).object("post", d.story_token).post({
                access_token: b("PageContentTabAccessToken").getAccessToken(),
                is_published: !0,
                backdated_time: f.getTime() / 1e3,
                backdated_time_granularity: "day"
            }), function(c) {
                b("PageContentTabDispatcher").handlePostRemoved(a, d.id),
                b("PageContentTabLoadingDialog").hide()
            }, function(a) {
                var e = a.error_user_msg ? a.error_user_msg : h._("Could not backdate post.");
                b("PageContentTabLogger").log("api_error", c, {
                    error: JSON.stringify(a),
                    action: i.BACKDATE,
                    post_id: d.id
                });
                b("PageContentTabCommonConfig").showErrorDialog(h._("Error"), e)
            })
        },
        deletePosts: function(a, c, d) {
            b("PageContentTabLoadingDialog").show();
            var f = 0;
            d.forEach(function(g) {
                b("promiseDone")(b("GraphAPI")(k, e.id).object("post", g.story_token).remove({
                    access_token: b("PageContentTabAccessToken").getAccessToken()
                }), function(c) {
                    b("PageContentTabDispatcher").handlePostRemoved(a, g.id),
                    f++,
                    f === d.length && b("PageContentTabLoadingDialog").hide()
                }, function(a) {
                    b("PageContentTabLogger").log("api_error", c, {
                        error: JSON.stringify(a),
                        action: i.DELETE,
                        post_id: g.id
                    })
                })
            }, this)
        },
        deletePostsbyID: function(a, c, d, f, g) {
            b("PageContentTabLoadingDialog").show();
            var h = 0;
            f === !0 && c === b("PageContentTabConstants").TABS.PUBLISHED_POSTS ? d.forEach(function(e) {
                b("promiseDone")(b("PageContentTabDeleteStoryMutation")({
                    story_id: e.graphQl_story_id,
                    actor_id: a,
                    story_location: "PAGES_FEED"
                })["catch"](function(a) {
                    b("PageContentTabLogger").log("api_error", c, {
                        error: JSON.stringify(a),
                        action: i.DELETE,
                        post_id: e.id
                    })
                }), function() {
                    b("PageContentTabDispatcher").handlePostRemoved(a, e.id),
                    h++,
                    h === d.length && b("PageContentTabLoadingDialog").hide()
                })
            }, this) : d.forEach(function(f) {
                b("promiseDone")(b("GraphAPI")(k, e.id).object("post", f.id).remove({
                    access_token: b("PageContentTabAccessToken").getAccessToken()
                }), function(c) {
                    b("PageContentTabDispatcher").handlePostRemoved(a, f.id),
                    h++,
                    h === d.length && (b("PageContentTabLoadingDialog").hide(),
                    g && g())
                }, function(a) {
                    b("PageContentTabLogger").log("api_error", c, {
                        error: JSON.stringify(a),
                        action: i.DELETE,
                        post_id: f.id
                    }),
                    g && g()
                })
            }, this)
        },
        publishPosts: function(a, c, d, f) {
            __p && __p();
            b("PageContentTabLoadingDialog").show();
            var g = 0;
            d.forEach(function(m) {
                b("promiseDone")(b("GraphAPI")(k, e.id).object("post", m.story_token).post({
                    access_token: b("PageContentTabAccessToken").getAccessToken(),
                    is_published: !0
                }), function(e) {
                    b("PageContentTabDispatcher").handlePostRemoved(a, m.id),
                    c === j.BRANDED_CONTENT && b("PageContentTabBrandedContentUtils").postAccepted(a, m.creator_id, m.id),
                    g++,
                    g === d.length && (b("PageContentTabLoadingDialog").hide(),
                    f && f())
                }, function(a) {
                    var d = a.error_user_msg ? a.error_user_msg : h._("Could not publish post.")
                      , e = a.error_user_title ? a.error_user_title : h._("Error");
                    b("PageContentTabLogger").log("api_error", c, {
                        error: JSON.stringify(a),
                        action: i.PUBLISH,
                        post_id: m.id
                    });
                    a.code === l && (d = h._("You don't have the correct permissions to publish this post. Please contact the ad account's administrator."),
                    e = h._("Unable to Publish."));
                    b("PageContentTabCommonConfig").showErrorDialog(e, d);
                    b("PageContentTabLoadingDialog").hide();
                    f && f()
                })
            })
        },
        scheduleDraftPost: function(a, c, d, f) {
            b("PageContentTabLoadingDialog").show(),
            b("promiseDone")(b("GraphAPI")(k, e.id).object("post", d.story_token).post({
                access_token: b("PageContentTabAccessToken").getAccessToken(),
                scheduled_publish_time: Math.floor(f.getTime() / 1e3)
            }), function(c) {
                b("PageContentTabDispatcher").handlePostRemoved(a, d.id),
                d.scheduled_publish_time = f.toISOString(),
                b("PageContentTabDispatcher").handlePostCreated(j.SCHEDULED_POSTS, d, a),
                b("PageContentTabLoadingDialog").hide()
            }, function(a) {
                var e = a.error_user_msg ? a.error_user_msg : h._("Could not schdule post.")
                  , f = a.error_user_title ? a.error_user_title : h._("Error");
                b("PageContentTabLogger").log("api_error", c, {
                    error: JSON.stringify(a),
                    action: i.SCHEDULE,
                    post_id: d.id
                });
                a.error_subcode === 1946015 && b("PageContentTabCommonConfig").showErrorDialog(f, e);
                b("PageContentTabLoadingDialog").hide()
            })
        },
        reloadTab: function(a) {
            b("Arbiter").inform("reloadContentTab/" + a)
        },
        changeTab: function(a) {
            b("Arbiter").inform("changeContentTab/" + a)
        },
        reloadLeftNavGroups: function(a) {
            b("Arbiter").inform("pageContentTab/leftNavUpdated", a)
        },
        changeTabAndForceReload: function(a) {
            b("Arbiter").inform("changeContentTabAndForceReload/" + a)
        },
        reloadVideoListHeader: function(a) {
            b("PageContentTabDispatcher").handleRequestVideoListHeaderInfo(a)
        },
        reschedulePost: function(a, c, d) {
            b("PageContentTabLoadingDialog").show(),
            b("promiseDone")(b("GraphAPI")(k, e.id).object("post", c.story_token).post({
                access_token: b("PageContentTabAccessToken").getAccessToken(),
                scheduled_publish_time: Math.floor(d.getTime() / 1e3)
            }), function(a) {
                b("PageContentTabDispatcher").handlePostChanged({
                    scheduled_publish_time: d.toISOString(),
                    id: c.id
                }),
                b("PageContentTabLoadingDialog").hide()
            }, function(d) {
                b("PageContentTabLogger").log("api_error", a, {
                    error: JSON.stringify(d),
                    action: i.RESCHEDULE,
                    post_id: c.id
                })
            })
        },
        unschedulePosts: function(a, c, d) {
            b("PageContentTabLoadingDialog").show(),
            d.forEach(function(d) {
                b("promiseDone")(b("GraphAPI")(k, e.id).object("post", d.story_token).post({
                    access_token: b("PageContentTabAccessToken").getAccessToken(),
                    scheduled_publish_time: 0
                }), function(c) {
                    b("PageContentTabDispatcher").handlePostRemoved(a, d.id),
                    b("PageContentTabDispatcher").handlePostCreated(j.DRAFTS, d, a),
                    b("PageContentTabLoadingDialog").hide()
                }, function(a) {
                    b("PageContentTabLogger").log("api_error", c, {
                        error: JSON.stringify(a),
                        action: i.UNSCHEDULE,
                        post_id: d.id
                    })
                })
            })
        },
        updateSinglePost: function(a) {
            b("PageContentTabDispatcher").handlePostChanged(a)
        },
        deleteCollections: function(a, c, d) {
            b("PageContentTabLoadingDialog").show();
            var f = 0;
            d.forEach(function(g) {
                b("promiseDone")(b("GraphAPI")(k, e.id).object("curated_collection", g.id).remove({
                    access_token: b("PageContentTabAccessToken").getAccessToken()
                }), function(e) {
                    b("PageContentTabDispatcher").handlePostRemoved(a, g.id, c),
                    f++,
                    f === d.length && b("PageContentTabLoadingDialog").hide()
                })
            }, this)
        }
    };
    e.exports = a
}
), null);
__d("PageContentTabConfirmationDialog.react", ["fbt", "LayerFadeOnHide", "LayerHideOnEscape", "React", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = b("React").PropTypes;
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.cancelLabel || g._("Cancel");
            return b("React").jsxs(b("XUIDialog.react"), {
                behaviors: {
                    LayerHideOnEscape: b("LayerHideOnEscape"),
                    LayerFadeOnHide: b("LayerFadeOnHide")
                },
                shown: !0,
                width: 450,
                children: [b("React").jsx(b("XUIDialogTitle.react"), {
                    children: this.props.title
                }), b("React").jsx(b("XUIDialogBody.react"), {
                    children: this.props.body
                }), b("React").jsxs(b("XUIDialogFooter.react"), {
                    children: [b("React").jsx(b("XUIDialogButton.react"), {
                        action: "cancel",
                        label: a,
                        use: "default"
                    }), b("React").jsx(b("XUIDialogButton.react"), {
                        "data-testid": "page_content_tab_confirm_button",
                        action: "cancel",
                        label: this.props.confirmationLabel,
                        onClick: this.props.onConfirm,
                        use: "confirm"
                    })]
                })]
            })
        }
        ;
        return c
    }(b("React").Component);
    c.propTypes = {
        cancelLabel: a.string,
        title: a.string.isRequired,
        body: a.string.isRequired,
        confirmationLabel: a.string.isRequired,
        onConfirm: a.func.isRequired
    };
    e.exports = c
}
), null);
__d("PageContentTabTextUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPostID: function(a) {
            a = a.split("_");
            return a.pop()
        }
    };
    e.exports = a
}
), null);
__d("PageContentTabCommonConfig", ["fbt", "DOM", "LayerFadeOnHide", "LayerHideOnEscape", "PageContentTabActions", "PageContentTabConfig", "PageContentTabConfirmationDialog.react", "PageContentTabConstants", "PageContentTabTextUtils", "PostScheduleDialog.react", "React", "ReactDOM", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogFooter.react", "XUIDialogOkayButton.react", "XUIDialogTitle.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = b("PageContentTabConstants").COLUMNS
      , i = 60 * 1e3
      , j = b("PageContentTabConstants").TABS
      , k = {
        getValueFromInsight: function(a) {
            return a.values && a.values.length === 1 ? a.values[0].value.toString() : "0"
        },
        maxInsightValue: function(a, b) {
            var c = 0;
            a.forEach(function(a) {
                a = a.insights && a.insights.data;
                (a || []).forEach(function(a) {
                    if (a.name === b) {
                        a = k.getValueFromInsight(a);
                        c = Math.max(c, parseInt(a, 10))
                    }
                })
            });
            return c
        },
        maxProductInsightValue: function(a, b) {
            var c = 0;
            a.forEach(function(a) {
                var d = b.map(function(b) {
                    return a.commerce_insights[b]
                });
                d = d.reduce(function(a, b) {
                    return a + b
                });
                c = Math.max(c, d ? d : 0)
            });
            return c
        },
        showErrorDialog: function(a, c) {
            var d;
            b("ReactDOM").render((d = b("React")).jsxs(b("XUIDialog.react"), {
                shown: !0,
                behaviors: {
                    LayerFadeOnHide: b("LayerFadeOnHide"),
                    LayerHideOnEscape: b("LayerHideOnEscape")
                },
                width: 600,
                children: [d.jsx(b("XUIDialogTitle.react"), {
                    children: d.jsx("span", {
                        children: a
                    })
                }), d.jsx(b("XUIDialogBody.react"), {
                    children: c
                }), d.jsx(b("XUIDialogFooter.react"), {
                    children: d.jsx(b("XUIDialogOkayButton.react"), {
                        use: "confirm",
                        action: "cancel"
                    })
                })]
            }), b("DOM").create("div"))
        },
        showConfirmationDialog: function(a, c, d, e, f) {
            b("ReactDOM").render(b("React").jsx(b("PageContentTabConfirmationDialog.react"), {
                cancelLabel: f,
                title: a,
                body: c,
                confirmationLabel: d,
                onConfirm: e
            }), b("DOM").create("div"))
        },
        showConfirmationDialogWithSocialFeedbackWarning: function(a, b, c, d, e, f) {
            k.showConfirmationDialog(a, c, d, k.showConfirmationDialog.bind(k, a, b, d, e, f), f)
        },
        showSchedulePostDialog: function(a, c) {
            c = b("React").jsx(b("PostScheduleDialog.react"), {
                timezoneStr: b("PageContentTabConfig").timezone_str,
                onSubmit: b("PageContentTabActions").scheduleDraftPost.bind(b("PageContentTabActions"), c.page_id, j.ADS_POSTS, a[0])
            });
            c = b("ReactDOM").render(c, b("DOM").create("div"));
            c.show()
        },
        isScheduledTimeValid: function(a) {
            var b = Date.now() + 11 * i;
            return a > b
        },
        isSharingSocialFeedback: function(a) {
            return a.is_sharing_social_feedback
        },
        getSharingSocialFeedbackPostIDs: function(a) {
            var b = ""
              , c = !0;
            a.forEach(function(a) {
                k.isSharingSocialFeedback(a) && (!c ? b += ", " : c = !1,
                b += a.id)
            });
            return b
        },
        getNumOfSharingSocialFeedbackPosts: function(a) {
            var b = 0;
            a.forEach(function(a) {
                k.isSharingSocialFeedback(a) && b++
            });
            return b
        },
        getWarningMessageForSharingSocialFeedbackPosts: function(a, b) {
            var c = k.getNumOfSharingSocialFeedbackPosts(a);
            return a.length === 1 ? g._("The post you've selected is sharing metrics, such as likes, reactions, comments and shares, with other posts. If you {action} the selected post, you'll lose these shared metrics, which may impact the engagement and performance metrics for any ads that are associated with the post.", [g._param("action", b)]) : c > 1 ? g._("Some of the posts you've selected are sharing metrics, such as likes, reactions, comments and shares, with other posts: ({sharingPosts}) If you {action} the selected posts, you'll lose these shared metrics, which may impact the engagement and performance metrics for any ads that are associated with these posts.", [g._param("sharingPosts", k.getSharingSocialFeedbackPostIDs(a)), g._param("action", b)]) : g._("One of the posts you've selected are sharing metrics, such as likes, reactions, comments and shares, with other posts: ({sharingPosts}) If you {action} the selected post, you'll lose these shared metrics, which may impact the engagement and performance metrics for any ads that are associated with this post.", [g._param("sharingPosts", k.getSharingSocialFeedbackPostIDs(a)), g._param("action", b)])
        },
        createScheduledPostRow: function(a, c) {
            var d = k.createDraftPostRow(a, c);
            d[h.SCHEDULED_PUBLISH_TIME] = {
                time: a.scheduled_publish_time,
                admin: a.admin_creator && a.admin_creator.name
            };
            d[h.PROMOTION_STATUS] = a.promotion_info;
            d[h.ID] = b("PageContentTabTextUtils").getPostID(a.id);
            d[h.POST] = babelHelpers["extends"]({}, d[h.POST], {
                show_tool_tip: !a.is_post_in_good_state && c.show_disabled_scheduled_post_new_design
            });
            return d
        },
        createDraftPostRow: function(a, b) {
            return k._createUnpublishedPostRowBase(a, b)
        },
        _createUnpublishedPostRowBase: function(a, b) {
            var c = {};
            c[h.POST] = {
                id: a.id,
                text: a.message,
                img: a.thumbnail || b.picture && b.picture.url,
                url: a.permalink_url,
                owner: b.page_id,
                place: a.place,
                og_action_summary: a.og_action_summary
            };
            c[h.DATE_CREATED] = {
                time: a.creation_time,
                admin: a.admin_creator && a.admin_creator.name
            };
            c[h.DATE_LAST_MODIFIED] = {
                edit_actions: a.edit_actions && a.edit_actions.data,
                modified_time: a.modified_time
            };
            c[h.LOCATION_LANGUAGE] = a.privacy_description;
            return c
        }
    };
    e.exports = k
}
), null);
__d("PageContentTabRightsManagerStore", ["Arbiter", "EventEmitter", "PageContentTabConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b;
            b = a.call(this) || this;
            b.$PageContentTabRightsManagerStore1 = "";
            b.$PageContentTabRightsManagerStore2 = "DEFAULT";
            b.$PageContentTabRightsManagerStore3 = !1;
            b.$PageContentTabRightsManagerStore4 = !1;
            b.$PageContentTabRightsManagerStore5 = 0;
            b.$PageContentTabRightsManagerStore6 = 0;
            return b
        }
        var d = c.prototype;
        d.init = function(a, b, c, d, e, f) {
            this.$PageContentTabRightsManagerStore1 = a,
            this.$PageContentTabRightsManagerStore2 = b,
            this.$PageContentTabRightsManagerStore3 = c,
            this.$PageContentTabRightsManagerStore4 = d,
            this.$PageContentTabRightsManagerStore5 = e,
            this.$PageContentTabRightsManagerStore6 = f
        }
        ;
        d.getIsRMLite = function() {
            return this.$PageContentTabRightsManagerStore2 === "LITE"
        }
        ;
        d.getIsRM4P = function() {
            return this.$PageContentTabRightsManagerStore2 === "MUSIC_PUBLISHER"
        }
        ;
        d.setRMVersion = function(a) {
            this.$PageContentTabRightsManagerStore2 = a
        }
        ;
        d.getHasUploadedReferenceFiles = function() {
            return this.$PageContentTabRightsManagerStore3
        }
        ;
        d.getHasSetUpMatchSettings = function() {
            return this.$PageContentTabRightsManagerStore4
        }
        ;
        d.getUserAccessToken = function() {
            return this.$PageContentTabRightsManagerStore1
        }
        ;
        d.getNumVideosImported = function() {
            return this.$PageContentTabRightsManagerStore5
        }
        ;
        d.getTotalVideosToImport = function() {
            return this.$PageContentTabRightsManagerStore6
        }
        ;
        d.setHasUploadedReferenceFiles = function() {
            this.$PageContentTabRightsManagerStore3 || (this.$PageContentTabRightsManagerStore3 = !0,
            this.emit("change"))
        }
        ;
        d.setHasSetUpMatchSettings = function() {
            this.$PageContentTabRightsManagerStore4 || (this.$PageContentTabRightsManagerStore4 = !0,
            this.emit("change"),
            b("Arbiter").inform("reloadContentTabInBackground/" + b("PageContentTabConstants").TABS.ALL_REFERENCE_FILES))
        }
        ;
        d.setTotalVideosToImport = function(a) {
            this.$PageContentTabRightsManagerStore6 = a,
            this.emit("change")
        }
        ;
        d.setImportFinished = function() {
            this.$PageContentTabRightsManagerStore5 = 0,
            this.$PageContentTabRightsManagerStore6 = 0,
            this.emit("change")
        }
        ;
        return c
    }(b("EventEmitter"));
    e.exports = new a()
}
), null);
__d("RightsManagerFbt", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = {
        ALLOWED: g._("Allowed"),
        ATTRIBUTION_SECTION_TITLE: g._("Select ownership link"),
        ATTRIBUTION_SECTION_TITLE_LITE: g._("Destination Page"),
        BLOCKED: g._("Blocked"),
        CLAIMED: g._("Claimed"),
        INSIGHTS: g._("Details"),
        MATCHES: g._("Matches"),
        MANUAL_REVIEW: g._("Manual review"),
        MONITORED: g._("Monitored"),
        OWNERSHIP_LINK: g._("Ownership link"),
        MANUAL_CLAIMS: g._("Manual claims"),
        PROTECTED_VIDEO: g._("Protected videos"),
        PROTECTED_VIDEOS: g._("Protected videos"),
        REMOVED: g._("Removed"),
        REPORTED: g._("Reported"),
        STATUS: g._("Status"),
        YOUR_FILE: g._("Your file")
    }
}
), null);
__d("VideoCopyrightMonitoringType", ["fbt"], (function(a, b, c, d, e, f, g) {
    a = {
        VIDEO_AND_AUDIO: {
            intValue: 1,
            value: "VIDEO_AND_AUDIO",
            label: g._("Video & audio")
        },
        VIDEO_ONLY: {
            intValue: 2,
            value: "VIDEO_ONLY",
            label: g._("Video only")
        },
        AUDIO_ONLY: {
            intValue: 3,
            value: "AUDIO_ONLY",
            label: g._("Audio only")
        }
    };
    e.exports = a
}
), null);
__d("VideoCopyrightPublisherType", ["fbt"], (function(a, b, c, d, e, f, g) {
    a = {
        PAGE: {
            value: "page",
            label: g._("Pages"),
            summaryLabel: g._("Pages")
        },
        PERSON: {
            value: "person",
            label: g._("Profiles"),
            summaryLabel: g._("Profiles")
        }
    };
    e.exports = a
}
), null);
__d("CopyrightReferenceFileGraphFields", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        CONTENT_TYPE: "content_type",
        DOWNLOAD_HD_URL: "download_hd_url",
        DURATION_IN_SEC: "duration_in_sec",
        ENCODING_STATUS: "encoding_status",
        ID: "id",
        LIVE_STATUS: "live_status",
        PUBLISHED_TIME: "published_time",
        COPYRIGHT_CREATION_TIME: "copyright_creation_time",
        THUMBNAIL_URL: "thumbnail_url",
        THUMBNAIL_URL_WHILE_ENCODING: "thumbnail_url_while_encoding",
        TITLE: "title",
        METADATA: "metadata",
        UNIVERSAL_CONTENT_ID: "universal_content_id",
        FINGERPRINT_VALIDITY: "fingerprint_validity",
        ISWC: "iswc",
        WRITER_NAMES: "writer_names",
        DISPLAY_ARTIST: "display_artist",
        SUB_TITLE: "sub_title"
    })
}
), null);
__d("XRightsManagerInstagramUserNameToIDController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/copyright/ig_user_name_to_id/", {
        page_id: {
            type: "FBID",
            required: !0
        },
        user_names: {
            type: "StringSet",
            required: !0
        }
    })
}
), null);
__d("IGUserDataFetcher", ["regeneratorRuntime", "AsyncRequest", "XRightsManagerInstagramUserNameToIDController"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        gen: function(a, c) {
            var d;
            return b("regeneratorRuntime").async(function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        d = b("XRightsManagerInstagramUserNameToIDController").getURIBuilder().setFBID("page_id", c).setStringSet("user_names", a).getURI();
                        return e.abrupt("return", new (b("AsyncRequest"))(d).setMethod("GET").setURI(d).setReadOnly(!0).exec());
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        }
    }
}
), null);
__d("VideoCopyrightTrustedPartnerInfoGraphFields", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        CAN_CONFIRM_BLOCK: "can_confirm_block",
        CONFIRM_BLOCK_TIME: "confirm_block_time",
        CAN_CONFIRM_ACTION: "can_confirm_action",
        CONFIRM_ACTION_TIME: "confirm_action_time",
        IS_TRUSTED_PARTNER_MATCH: "is_trusted_partner_match",
        IS_FLAGGED_ENTITY_MATCH: "is_flagged_entity_match"
    })
}
), null);
__d("XVideoCopyrightMatchDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/copyright/match/dialog/", {
        id: {
            type: "Int",
            required: !0
        },
        source: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("VideoCopyrightUtils", ["ix", "cx", "fbt", "invariant", "regeneratorRuntime", "ActorURI", "AdsGenericFilter", "AdsGenericFilterField", "AdsGenericFilterFieldType", "AdsGenericFilterSet", "AsyncDialog", "AsyncRequest", "CopyrightReferenceFileGraphFields", "GraphAPIFieldUtils", "IGUserDataFetcher", "Image.react", "PageContentTabConstants", "PageContentTabLogger", "PageContentTabRightsManagerStore", "React", "RightsManagerFbt", "TooltipData", "VideoCopyrightGraphAPIVersion", "VideoCopyrightMatchStatus", "VideoCopyrightMonitoringType", "VideoCopyrightPublisherType", "VideoCopyrightRuleActionType", "VideoCopyrightRuleGraphFields", "VideoCopyrightSegmentSource", "VideoCopyrightTrustedPartnerInfoGraphFields", "VideoReferenceMatchState", "XVideoCopyrightMatchDialogController", "asset", "fbglyph", "gkx", "joinClasses", "parseISODate"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    __p && __p();
    var k = b("PageContentTabConstants").TABS
      , l = 20
      , m = 86400
      , n = 3600
      , o = 60
      , p = 1e3
      , q = {
        GRAPH_API_VERSION: b("VideoCopyrightGraphAPIVersion").graph_api_version,
        DEFAULT_MONITORING_TYPE: b("VideoCopyrightMonitoringType").VIDEO_ONLY.value,
        DEFAULT_LIVE_MONITORING_TYPE: b("VideoCopyrightMonitoringType").VIDEO_AND_AUDIO.value,
        DEFAULT_PUBLISHER_TYPE: b("VideoCopyrightPublisherType").PAGE.value,
        DEFAULT_RULE_ID: "DEFAULT",
        formatNumber: function(a) {
            return a >= 1e6 ? Math.round(a / 1e6) + "M" : a >= 1e3 ? Math.round(a / 1e3) + "K" : a.toString()
        },
        getAudioReleaseGraphAPIFields: function(a) {
            a === void 0 && (a = !1);
            var c = ["id", "album_title", "created_time", "displayed_artist", "ean", "upc", "grid", "isrc", "label_name", "proprietary_id", "parental_warning_type", "genre", "audio_release_image_uri", "original_release_date"];
            (b("gkx")("815602") || a) && c.push("availability_status");
            return c
        },
        apiToAvailabilityStatus: function(a) {
            return a == null ? null : {
                status: a.status,
                type: a.type,
                release: a.release,
                status_reasons: a.status_reasons
            }
        },
        apiToAssetAvailabilityStatus: function(a) {
            __p && __p();
            if (a == null)
                return null;
            var b = {};
            for (var c = 0; c < a.length; c++) {
                var d, e, f = a[c];
                e = (e = f) != null ? (e = e.value) != null ? e.asset_availability : e : e;
                d = (d = f) != null ? (d = d.value) != null ? d.availability_by_geo : d : d;
                var g = {};
                for (var h = 0; d != null && h < d.length; h++) {
                    var i, j = d[h];
                    g[j.key] = {
                        status: (i = j) != null ? (i = i.value) != null ? i.status : i : i,
                        type: (i = j) != null ? (i = i.value) != null ? i.type : i : i,
                        release: (i = j) != null ? (i = i.value) != null ? i.release : i : i,
                        status_reasons: (i = j) != null ? (i = i.value) != null ? i.status_reasons : i : i
                    }
                }
                b[f.key] = {
                    asset_availability: e,
                    availability_by_geo: g
                }
            }
            return b
        },
        getAvailableActionsForRMVersion: function(a) {
            switch (a) {
            case "MUSIC_PUBLISHER":
            case "MUSIC_LABEL":
                return [b("VideoCopyrightRuleActionType").MANUAL_REVIEW, b("VideoCopyrightRuleActionType").TRACK, b("VideoCopyrightRuleActionType").BLOCK];
            case "DEFAULT":
                return [b("VideoCopyrightRuleActionType").MANUAL_REVIEW, b("VideoCopyrightRuleActionType").TRACK, b("VideoCopyrightRuleActionType").BLOCK, b("VideoCopyrightRuleActionType").MONETIZE, b("VideoCopyrightRuleActionType").TAKEDOWN];
            case "LITE":
                return [b("VideoCopyrightRuleActionType").TRACK, b("VideoCopyrightRuleActionType").BLOCK, b("VideoCopyrightRuleActionType").TAKEDOWN];
            default:
                return []
            }
        },
        getCopyrightAttributionGraphAPIFields: function() {
            return ["id", "title", "creator", "copyright_count", "link_title", "match_count", "attribution_type", "attribution_target_id", "status", "is_enabled", "attribution_uri", "creation_time", "attribution_target_name"]
        },
        getGraphAPIFields: function(a) {
            var c;
            c = ["match_status", "active_match_data_id", "matched_video_asset", "expiration_days", (c = b("GraphAPIFieldUtils")).getFieldWithSubfields("last_modified_user", ["name"]), "last_modified_time", "added_to_dashboard_time", "is_viewed", "notes", "audit_log", "applied_actions", "sibling_applied_actions", "action_requiring_manual_review", "review_report_id", c.getFieldWithSubfields("match_data", ["id", "excluded_ownership_segments", "video_copyright_id", "video_matched_segments", "audio_matched_segments", "total_match_duration", c.getFieldWithSubfields("reference_asset", ["content_type", "download_hd_url", "duration_in_sec", "id", "live_status", "metadata", "published_time", "thumbnail_url", "thumbnail_url_while_encoding", "title", "universal_content_id", "fingerprint_validity", "iswc", "writer_names", "display_artist", "copyright_creation_time", "sub_title"]), "monitoring_type", "match_rule", "is_manual_match", "applied_actions", c.getFieldWithSubfields("music_work_associated_audio_asset", ["id", "display_artist", "download_hd_url", "title", "subtitle", c.getFieldWithSubfields("audio_isrc", ["isrc"])])]), "is_anonymous", "muted_segments_from_other_publishers", "dispute", "publisher_can_restore", "matched_video_overlap_duration_in_sec", "available_ui_actions"];
            a.copyright_geo_actions_enabled && c.push("ownership_countries");
            a.show_attributions_tab && c.push(b("GraphAPIFieldUtils").getFieldWithSubfields("attribution", ["title"]));
            (a.can_see_trusted_partner_match || a.can_see_flagged_entity_match) && c.push(b("GraphAPIFieldUtils").getFieldWithSubfields("trusted_partner_info", Object.values(b("VideoCopyrightTrustedPartnerInfoGraphFields")).map(function(a) {
                return String(a)
            })));
            a.can_see_is_business_page_match && c.push("is_business_page_match");
            return c
        },
        getDefaultMatchRule: function() {
            var a = {};
            a[b("VideoCopyrightRuleGraphFields").ID] = this.DEFAULT_RULE_ID;
            return a
        },
        getMatchGraphFields: function() {
            var a;
            return [(a = b("VideoCopyrightRuleGraphFields")).ID, a.NAME, a.CONDITION_GROUPS, a.CREATED_DATE, a.CREATOR, a.COPYRIGHTS_COUNT, a.MATCHES_COUNT, a.IS_IN_MIGRATION, a.IS_NEW_VERSION_RULE]
        },
        getFBPopularVideoSearchGraphFields: function() {
            return ["id", "created_time", "title", "description", "thumbnails", "post_views", "from", "length"]
        },
        getIGPopularVideoSearchGraphFields: function() {
            return ["id", "timestamp", "caption", "source", "permalink", "thumbnail_url", "like_count", "comments_count"]
        },
        getReferenceMatchGraphFields: function() {
            return ["reference_asset", "reference_owner_name", "reference_owner_id", "reference_copyright", "matched_reference_asset", "matched_reference_owner_id", "matched_reference_owner_name", "matched_reference_copyright", b("GraphAPIFieldUtils").getFieldWithSubfields("match_data", ["id", "excluded_ownership_segments", "video_copyright_id", "video_matched_segments", "audio_matched_segments", "original_video_matched_segments", "original_audio_matched_segments", "total_match_duration", "reference_asset", "monitoring_type", "match_rule", "is_manual_match", "applied_actions"]), "conflicting_countries", "match_state", "creation_time", "expiration_time", "modification_history", "dispute_form_data", "rejection_form_data", "is_viewed", "is_disputable", "is_possible_conflict"]
        },
        getReferenceFileGraphFields: function(a) {
            var c = ["id", "reference_owner_id", "monitoring_type", b("GraphAPIFieldUtils").getFieldWithSubfields("attribution", ["id", "title", "is_enabled", "attribution_type", "attribution_target_id", "attribution_target_name"]), "ops_override_monitoring_type", "reference_file_disabled_by_ops", "reference_file_disabled", "displayed_matches_count", "displayed_fb_matches_count", "displayed_ig_matches_count", "copyright_content_id", "rule_ids", "whitelisted_ids", "ownership_countries", "monitoring_status", "creator", "in_conflict", b("GraphAPIFieldUtils").getFieldWithSubfields("reference_file", Object.values(b("CopyrightReferenceFileGraphFields")).map(function(a) {
                return String(a)
            })), "reference_file_insights_key_id", "content_category", "excluded_ownership_segments"];
            a && a.can_see_fingerprint_expiration && c.push("reference_file_expired");
            return c
        },
        getSoundRecordingGraphFields: function() {
            return ["id", "isrc", "creation_time", "displayed_matches_count", "reference_file_status", "ridge_monitoring_status", b("GraphAPIFieldUtils").getFieldWithSubfields("audio_asset", ["title", "subtitle", "display_artist", "duration_in_ms"])]
        },
        getMusicWorkGraphFields: function() {
            return ["id", "creation_time", "status", b("GraphAPIFieldUtils").getFieldWithSubfields("music_work", ["id", "custom_id", "iswc", "title"])]
        },
        getMusicVideoGraphFields: function() {
            return ["id", "isrc", "creation_time", "displayed_matches_count", "reference_file_status", "ridge_monitoring_status", b("GraphAPIFieldUtils").getFieldWithSubfields("video_asset", ["title", "thumbnail_url", "duration_in_sec"])]
        },
        getDeletedVideoAsset: function() {
            __p && __p();
            var a = {};
            a.title = i._("Deleted");
            a.published_time = 0;
            a.thumbnail_url = "";
            a.duration_in_sec = 0;
            a.description = "";
            a.owner_name = "";
            a.view_count = 0;
            a.is_private = !1;
            return a
        },
        _getTabFromMatchStatus: function(a, c) {
            switch (a) {
            case b("VideoCopyrightMatchStatus").REMOVED:
                return k.TAKEDOWNS;
            case b("VideoCopyrightMatchStatus").REPORTED:
                return b("PageContentTabRightsManagerStore").getIsRMLite() ? k.TAKEDOWNS : k.REPORTED;
            case b("VideoCopyrightMatchStatus").ALLOWED:
                return k.TRACKED;
            case b("VideoCopyrightMatchStatus").ADDED_MATCH:
                return k.UNSENT_REPORTS;
            case b("VideoCopyrightMatchStatus").BLOCKED:
                return k.BLOCKED;
            case b("VideoCopyrightMatchStatus").CLAIMED:
                return k.CLAIMED;
            case b("VideoCopyrightMatchStatus").MONITORED:
                return k.TRACKED;
            default:
                return k.MANUAL_REVIEW
            }
        },
        logDataError: function(a, c, d) {
            d = q._getTabFromMatchStatus(a.match_status, d);
            b("PageContentTabLogger").log("data_error", d, {
                error: JSON.stringify(c),
                post_id: a.id
            })
        },
        logAPIError: function(a, c, d, e) {
            a = q._getTabFromMatchStatus(a, e);
            b("PageContentTabLogger").log("api_error", a, {
                error: c + " : " + JSON.stringify(d)
            })
        },
        isMajorityUnseen: function(a) {
            var b = 0;
            a.forEach(function(a) {
                a.is_viewed ? b += 1 : b -= 1
            });
            return b < 0
        },
        getMatchedOwnerFilter: function(a) {
            var c = new (b("AdsGenericFilterField"))("static_matched_owner_id",b("AdsGenericFilterFieldType").STRING_SET);
            a = a.matched_video_asset;
            a = a.owner_name;
            a.length > l && (a = a.substring(0, l));
            return new (b("AdsGenericFilterSet"))([new (b("AdsGenericFilter"))(c,"CONTAIN",a)])
        },
        getActiveMatchDataFromMatch: function(a) {
            var b = a.match_data
              , c = a.active_match_data_id;
            a = b.filter(function(a) {
                return c == a.id
            });
            if (a.length === 1)
                return a[0];
            else
                return b[0]
        },
        getReferenceVideoFilter: function(a) {
            a = this.getActiveMatchDataFromMatch(a);
            var c = new (b("AdsGenericFilterField"))("static_reference_video_id",b("AdsGenericFilterFieldType").STRING_SET);
            a = a.reference_asset;
            return new (b("AdsGenericFilterSet"))([new (b("AdsGenericFilter"))(c,"EQUAL",a.id)])
        },
        getCopyrightInUnixDateFormat: function(a, c) {
            a = a;
            var d = a.reference_file
              , e = d.published_time;
            e = b("parseISODate")(e);
            d.published_time = e.getTime() / 1e3;
            e = d.live_status === 0;
            var f = d.encoding_status;
            f = f && f.video_status === "processing";
            c && e && f && (d.live_status = 1);
            return a
        },
        openMatchComparisonDialog: function(a, c) {
            a = b("ActorURI").create(b("XVideoCopyrightMatchDialogController").getURIBuilder().setInt("id", a).setEnum("source", "dashboard").getURI(), c);
            b("AsyncDialog").send(new (b("AsyncRequest"))(a))
        },
        sortableColumnToField: function(a, c) {
            var d = this.getActiveMatchDataFromMatch(c);
            switch (a) {
            case b("PageContentTabConstants").COLUMNS.VIDEO_VIEWS:
                return c.matched_video_asset.view_count;
            case b("PageContentTabConstants").COLUMNS.OVERLAP:
                return d.total_match_duration;
            case b("PageContentTabConstants").COLUMNS.EXPIRES_DAYS:
            case b("PageContentTabConstants").COLUMNS.DISPUTE_EXPIRES_DAYS:
                return c.expiration_days;
            case b("PageContentTabConstants").COLUMNS.REFERENCE_VIDEO:
                return d.reference_asset.title;
            case b("PageContentTabConstants").COLUMNS.LAST_MODIFIED_BY:
                return c.last_modified_time;
            case b("PageContentTabConstants").COLUMNS.DATE_FOUND:
                return c.added_to_dashboard_time
            }
            j(0, 3678)
        },
        convertGraphAPIAssetToVideoCopyrightVideoMetadata: function(a) {
            if (!a)
                return null;
            var b = a.ad_break_offsets_in_ms;
            return {
                id: a.id,
                title: a.title,
                durationInSec: a.duration_in_sec,
                width: a.width,
                height: a.height,
                permalinkURL: a.permalink_url,
                thumbnailSrc: a.thumbnail_url,
                ownerPictureSrc: a.owner_picture_url,
                ownerPublicName: a.owner_name || "",
                ownerProfileURL: a.owner_url,
                publishedTime: a.published_time,
                isPrivate: a.is_private,
                description: a.description,
                viewsCount: a.view_count,
                commentsCount: a.comment_count,
                sharesCount: a.share_count,
                followersCount: a.followers_count,
                likesCount: a.like_count,
                liveStatus: a.live_status,
                privacyExplanation: a.privacy_explanation,
                adBreakOffsets: b,
                containsAdBreaks: b && b.length > 0,
                monetizingOwnerCount: a.monetizing_owner_count,
                platform: a.platform,
                isStory: a.is_story,
                storyExpirationHours: a.story_expiration_hours,
                videoId: a.video_id
            }
        },
        getDefaultReferenceFileType: function() {
            return {
                id: "",
                title: "",
                durationInSec: 0,
                thumbnailSrc: "",
                liveStatus: 2,
                contentType: "video",
                metadata: {},
                universalContentID: "",
                publishedTime: 0
            }
        },
        convertGraphAPIAssetToReferenceFileMetadata: function(a) {
            return !a ? this.getDefaultReferenceFileType() : {
                id: a.id,
                title: a.title,
                downloadHdUrl: a.download_hd_url,
                durationInSec: a.duration_in_sec,
                thumbnailSrc: a.thumbnail_url,
                liveStatus: a.live_status,
                contentType: a.content_type,
                metadata: a.metadata,
                publishedTime: a.published_time,
                universalContentID: a.universal_content_id,
                fingerprintValidity: a.fingerprint_validity,
                iswc: a.iswc,
                writer_names: a.writer_names,
                copyrightCreationTime: a.copyright_creation_time,
                subTitle: a.sub_title
            }
        },
        convertGraphAPIAuditLogToVideoMetadata: function(a) {
            var b = [];
            a.forEach(function(a) {
                b.push({
                    userName: a.user_name,
                    timestamp: a.timestamp,
                    matchState: a.match_state,
                    reason: a.reason,
                    appliedActions: a.applied_actions || []
                })
            });
            return b
        },
        convertGraphAPIDisputeToMetadata: function(a) {
            return {
                id: a.id,
                disputeType: a.dispute_type,
                status: a.status,
                expirationTime: a.expiration_time,
                timeCreated: a.time_created,
                timeAppealed: a.time_appealed,
                timeUpdated: a.time_updated,
                disputeFormData: a.dispute_form_data,
                appealFormData: a.appeal_form_data
            }
        },
        convertGraphAPIMatchToVideoCopyrightMatch: function(a) {
            var b = a.matched_video_asset
              , c = a.last_modified_user
              , d = a.audit_log
              , e = a.dispute
              , f = a.muted_segments_from_other_publishers;
            return {
                attribution: a.attribution,
                matchID: a.id,
                is_viewed: a.is_viewed,
                status: a.match_status,
                expirationInDays: a.expiration_days,
                matchedVideoAsset: b ? this.convertGraphAPIAssetToVideoCopyrightVideoMetadata(b) : null,
                lastModifiedUserName: c ? c.name : " ",
                lastModifiedTime: a.last_modified_time,
                auditLog: d ? this.convertGraphAPIAuditLogToVideoMetadata(d) : null,
                notes: a.notes,
                appliedActions: a.applied_actions || [],
                siblingAppliedActions: a.sibling_applied_actions || [],
                dispute: e ? this.convertGraphAPIDisputeToMetadata(e) : null,
                actionRequiringManualReview: a.action_requiring_manual_review,
                matchData: this.convertGraphAPIMatchDataToMetadata(a),
                addedToDashboardTime: a.added_to_dashboard_time,
                reviewReportID: a.review_report_id,
                ownershipCountries: a.ownership_countries,
                isAnonymous: a.is_anonymous,
                matchedAssetPlatform: b ? b.platform : "FB",
                mutedSegmentsFromOtherPublishers: this.convertGraphAPIMutedSegmentsFromOtherPublishers(f),
                trustedPartnerInfo: a.trusted_partner_info,
                isBusinessPageMatch: a.is_business_page_match,
                publisherCanRestore: a.publisher_can_restore,
                matchedVideoOverlapDurationInSec: a.matched_video_overlap_duration_in_sec
            }
        },
        convertGraphAPIMutedSegmentsFromOtherPublishers: function(a) {
            var b = [];
            if (!a)
                return b;
            a.forEach(function(a) {
                var c = a.publisher_name
                  , d = a.start_time_in_sec
                  , e = a.duration_in_sec;
                a = a.segment_source;
                b.push({
                    publisherName: c,
                    startTimeInSec: d,
                    durationInSec: e,
                    segmentSource: a
                })
            });
            return b
        },
        convertGraphAPIReferenceHistoryToMetadata: function(a) {
            var b = [];
            if (!a)
                return b;
            a.forEach(function(a) {
                b.push({
                    timestamp: a.timestamp,
                    matchState: a.match_state
                })
            });
            return b
        },
        convertGraphAPIMatchToVideoReferenceMatch: function(a, b) {
            b = b == a.matched_reference_owner_id;
            var c = b ? a.matched_reference_copyright : a.reference_copyright;
            return {
                id: a.id,
                history: this.convertGraphAPIReferenceHistoryToMetadata(a.modification_history),
                matchState: a.match_state,
                matchData: this.convertGraphAPIMatchDataToMetadataImpl(a.match_data),
                matchedAsset: a.matched_reference_asset ? this.convertGraphAPIAssetToReferenceFileMetadata(a.matched_reference_asset) : null,
                referenceAsset: a.reference_asset ? this.convertGraphAPIAssetToReferenceFileMetadata(a.reference_asset) : null,
                matchedReferenceOwnerID: a.matched_reference_owner_id,
                matchedReferenceOwnerName: a.matched_reference_owner_name,
                referenceOwnerID: a.reference_owner_id,
                referenceOwnerName: a.reference_owner_name,
                conflictingCountries: a.conflicting_countries,
                ownershipCountries: c ? c.ownership_countries : null,
                disputeFormData: JSON.parse(a.dispute_form_data),
                rejectionFormData: JSON.parse(a.rejection_form_data),
                expirationTime: a.expiration_time,
                isDisputable: a.is_disputable,
                isMatchedOwner: b,
                isPossibleConflict: a.is_possible_conflict,
                matchedReferenceCopyrightID: (c = a) != null ? (c = c.matched_reference_copyright) != null ? c.id : c : c,
                referenceCopyrightID: (b = a) != null ? (b = b.matched_reference_copyright) != null ? b.id : b : b
            }
        },
        convertGraphAPIMatchDataToMetadata: function(a) {
            var b = a.match_data
              , c = [];
            b && b.length && b.forEach(function(b) {
                var d = q.convertGraphAPIMatchDataToMetadataImpl(b);
                b.id.toString() === a.active_match_data_id ? c.unshift(d) : c.push(d)
            });
            return c
        },
        convertMatchedSegmentsToCopyrightSegments: function(a, c, d) {
            a = a[c ? d ? "original_video_matched_segments" : "video_matched_segments" : d ? "original_audio_matched_segments" : "audio_matched_segments"] || [];
            c = a.map(function(a) {
                return {
                    referenceStartTimeInSec: a.reference_start_time_in_sec,
                    matchedStartTimeInSec: a.matched_start_time_in_sec,
                    durationInSec: a.duration_in_sec,
                    refDurationInSec: a.ref_duration_in_sec,
                    errorType: a.error_type,
                    mediaType: a.media_type,
                    segmentSource: a.segment_source || b("VideoCopyrightSegmentSource").RIDGE_MATCHES,
                    included: !0
                }
            });
            return c
        },
        convertExcludedSegmentsToCopyrightSegments: function(a) {
            a = a.map(function(a) {
                return {
                    referenceStartTimeInSec: a.start_time_in_sec,
                    matchedStartTimeInSec: a.start_time_in_sec,
                    durationInSec: a.duration_in_sec,
                    refDurationInSec: a.duration_in_sec,
                    mediaType: a.media_type,
                    included: !!a.included,
                    segmentSource: b("VideoCopyrightSegmentSource").PUBLISHER_DEFINED
                }
            });
            return a
        },
        convertCopyrightSegmentsToExcludedSegments: function(a) {
            var c = [];
            a.forEach(function(a) {
                if (a.segmentSource !== b("VideoCopyrightSegmentSource").PUBLISHER_DEFINED)
                    return;
                a = {
                    start_time_in_sec: a.referenceStartTimeInSec,
                    duration_in_sec: a.durationInSec,
                    media_type: a.mediaType,
                    segment_source: a.segmentSource,
                    included: !!a.included
                };
                c.push(a)
            });
            return c
        },
        convertGraphAPIMatchDataToMetadataImpl: function(a) {
            var b = a.excluded_ownership_segments || [];
            return {
                id: a.id,
                excludedSegments: this.convertExcludedSegmentsToCopyrightSegments(b),
                monitoringType: a.monitoring_type,
                appliedActions: a.applied_actions,
                matchRule: a.match_rule,
                matchedDurationInSec: a.total_match_duration,
                videoSegments: this.convertMatchedSegmentsToCopyrightSegments(a, !0, !1),
                audioSegments: this.convertMatchedSegmentsToCopyrightSegments(a, !1, !1),
                originalVideoSegments: this.convertMatchedSegmentsToCopyrightSegments(a, !0, !0),
                originalAudioSegments: this.convertMatchedSegmentsToCopyrightSegments(a, !1, !0),
                referenceAsset: this.convertGraphAPIAssetToReferenceFileMetadata(a.reference_asset),
                isManualMatch: a.is_manual_match,
                videoCopyrightID: a.video_copyright_id,
                musicWorkAssociatedAudioAsset: a.music_work_associated_audio_asset,
                assetType: "VIDEO"
            }
        },
        getDisputeExpirationLabel: function(a) {
            var b, c;
            a = a - Date.now() / p;
            a < n ? (b = Math.ceil(a / o),
            c = b === 1 ? "minute" : "minutes") : a < m ? (b = Math.ceil(a / n),
            c = b === 1 ? "hour" : "hours") : (b = Math.ceil(a / m),
            c = b === 1 ? "day" : "days");
            if (b < 0)
                return null;
            else
                return i._({
                    "*": {
                        "day": "{time before expiration} day",
                        "days": "{time before expiration} days",
                        "hour": "{time before expiration} hour",
                        "hours": "{time before expiration} hours",
                        "minute": "{time before expiration} minute",
                        "minutes": "{time before expiration} minutes"
                    }
                }, [i._param("time before expiration", b, [0]), i._enum(c, {
                    day: "day",
                    days: "days",
                    hour: "hour",
                    hours: "hours",
                    minute: "minute",
                    minutes: "minutes"
                })])
        },
        getIsReferenceMatchStateActionable: function(a, c) {
            return c === b("VideoReferenceMatchState").CONFLICT || c === b("VideoReferenceMatchState").DISPUTED || c === b("VideoReferenceMatchState").POSSIBLE_CONFLICT || a && c === b("VideoReferenceMatchState").DISPUTE_REJECTED
        },
        getIsPassiveReferenceResolution: function(a, c) {
            if (a)
                return c === b("VideoReferenceMatchState").CONFLICT_EXPIRED || c === b("VideoReferenceMatchState").DISPUTE_REJECTED;
            else
                return c === b("VideoReferenceMatchState").DISPUTE_EXPIRED
        },
        getAppliedActionLabel: function(a) {
            __p && __p();
            a = a.map(function(a) {
                return a.action
            });
            var c = a.indexOf(b("VideoCopyrightRuleActionType").BLOCK) !== -1;
            if (c)
                return b("RightsManagerFbt").BLOCKED;
            c = a.indexOf(b("VideoCopyrightRuleActionType").MONETIZE) !== -1;
            if (c)
                return i._("Claim ad earnings");
            c = a.indexOf(b("VideoCopyrightRuleActionType").TRACK) !== -1;
            return c ? b("RightsManagerFbt").MONITORED : b("RightsManagerFbt").CLAIMED
        },
        getActionRequiringManualReviewLabel: function(a) {
            switch (a) {
            case b("VideoCopyrightRuleActionType").BLOCK:
                return i._("Block not applied");
            case b("VideoCopyrightRuleActionType").MONETIZE:
                return i._("Claim ad earnings not applied");
            default:
                return i._("Manually review")
            }
        },
        getReferenceMatchStateLabel: function(a, c) {
            __p && __p();
            switch (a) {
            case b("VideoReferenceMatchState").CONFLICT:
            case b("VideoReferenceMatchState").POSSIBLE_CONFLICT:
                return i._("Conflict detected");
            case b("VideoReferenceMatchState").OWNERSHIP_ASSERTED:
                return i._("Ownership asserted");
            case b("VideoReferenceMatchState").DISPUTED:
                return c ? i._("Dispute submitted") : i._("Ownership disputed");
            case b("VideoReferenceMatchState").DISPUTE_ACCEPTED:
                return c ? i._("Dispute accepted") : i._("Dispute accepted by you");
            case b("VideoReferenceMatchState").DISPUTE_REJECTED:
                return c ? i._("Dispute rejected") : i._("Dispute rejected by you");
            case b("VideoReferenceMatchState").CONFLICT_RESOLVED:
                return i._("Conflict resolved");
            case b("VideoReferenceMatchState").CONFLICT_EXPIRED:
                return i._("Conflict expired");
            case b("VideoReferenceMatchState").DISPUTE_EXPIRED:
                return c ? i._("Dispute accepted") : i._("Dispute expired");
            default:
                return i._("Unknown")
            }
        },
        getShouldShowReferenceMatchExpirationTime: function(a, c) {
            return c ? a === b("VideoReferenceMatchState").CONFLICT || a === b("VideoReferenceMatchState").POSSIBLE_CONFLICT : a === b("VideoReferenceMatchState").DISPUTED
        },
        getReferenceMatchExpirationTooltip: function(a, c, d, e) {
            if (c) {
                if (a === b("VideoReferenceMatchState").CONFLICT || a === b("VideoReferenceMatchState").POSSIBLE_CONFLICT)
                    return null
            } else if (a === b("VideoReferenceMatchState").DISPUTED)
                return null;
            return i._("{conflicting publisher} has {time before expiration} to respond to your dispute. You'll be notified when they respond.", [i._param("conflicting publisher", e), i._param("time before expiration", d)])
        },
        logToPageContentTabLoggerWithDetails: function(a, c, d) {
            b("PageContentTabLogger").log("action_taken_main_view", d, {
                page_id: c,
                action: a
            })
        },
        renderOldVersionRuleIndicator: function(a, c) {
            return c ? null : b("React").jsx(b("Image.react"), {
                className: b("joinClasses")(a, "_5u-h"),
                "data-tooltip-content": i._("This match rule needs to be replaced with a new match rule due to recent updates. Assign reference files associated with it to a different or new match rule."),
                "data-hover": "tooltip",
                "data-tooltip-position": "right",
                src: g("132175")
            })
        },
        dedupeSegments: function(a, b) {
            __p && __p();
            var c = 0
              , d = []
              , e = null;
            a.sort(function(a, c) {
                a = b ? a.referenceStartTimeInSec : a.matchedStartTimeInSec;
                c = b ? c.referenceStartTimeInSec : c.matchedStartTimeInSec;
                return a > c ? 1 : -1
            }).forEach(function(a) {
                __p && __p();
                var f = a.durationInSec
                  , g = b ? a.referenceStartTimeInSec : a.matchedStartTimeInSec;
                f = g + f;
                if (e && g < c) {
                    e.durationInSec += Math.max(0, f - c);
                    c = Math.max(c, f);
                    return
                }
                g = babelHelpers["extends"]({}, a);
                e = g;
                d.push(g);
                c = Math.max(c, f)
            });
            return d
        },
        convertIGUserNameToIDs: function(a, c) {
            __p && __p();
            var d;
            return b("regeneratorRuntime").async(function(e) {
                __p && __p();
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        if (!(c.length === 0)) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", []);
                    case 2:
                        e.next = 4;
                        return b("regeneratorRuntime").awrap(b("IGUserDataFetcher").gen(c, a));
                    case 4:
                        d = e.sent;
                        return e.abrupt("return", Object.values(d.payload));
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        },
        getMatchedOwnerBadge: function(a, c) {
            if (a)
                return b("React").jsx(b("Image.react"), babelHelpers["extends"]({
                    className: "_4gyc",
                    src: g("540419")
                }, b("TooltipData").propsFor(i._("Trusted partner"), "above")));
            return c ? b("React").jsx(b("Image.react"), babelHelpers["extends"]({
                className: "_4gyc",
                src: g("499172")
            }, b("TooltipData").propsFor(i._("This Page identifies as a business"), "above"))) : null
        },
        getGeoActionReasonName: function(a) {
            switch (a) {
            case "unauthorized_commercial_use":
                return i._("Unauthorised commercial use");
            case "restricted_content":
                return i._("Restricted content");
            case "objectionable_content":
                return i._("Objectionable content");
            case "artist_objection":
                return i._("Artist objection");
            case "prerelease_content":
                return i._("Pre-release content");
            case "product_parameters":
                return i._("Product parameters");
            case "premium_music_video":
                return i._("Premium Music Video");
            default:
                return null
            }
        },
        getGeoActionReasonTootip: function(a) {
            switch (a) {
            case "unauthorized_commercial_use":
                return i._("Includes recordings that are not licensed for business use");
            case "restricted_content":
                return i._("Includes recordings from restricted artists or restricted writers");
            case "objectionable_content":
                return i._("Includes violence, pornography or other objectionable content");
            case "artist_objection":
                return i._("Includes content that the artist has a formal objection to");
            case "prerelease_content":
                return i._("Includes recordings that have not been officially released");
            case "product_parameters":
                return i._("A type of video that isn't included in your licence (still image video, DJ mix, streaming service or other restricted format)");
            case "premium_music_video":
                return i._("Includes any part of a premium music video");
            default:
                return null
            }
        },
        getGeoActionReasonList: function() {
            return ["unauthorized_commercial_use", "restricted_content", "objectionable_content", "artist_objection", "prerelease_content", "product_parameters", "premium_music_video"]
        },
        getGeoActionReasonListMMRM: function(a) {
            var b = ["unauthorized_commercial_use", "restricted_content", "objectionable_content", "artist_objection", "prerelease_content", "product_parameters"];
            a === "MUSIC_LABEL" && b.push("premium_music_video");
            return b
        }
    };
    e.exports = q
}
), null);
__d("SUIMediaManagerTheme", ["ix", "cssVar", "cx", "FlexLayout.react", "Image.react", "React", "SUIAudiencePlatformTheme", "SUIBusinessTheme", "SUIMeasurementTheme", "SUITheme", "SUITypeStyle", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = {
        white: "#FFFFFF",
        cellBorder: "#dddfe2"
    };
    c = "-apple-system, BlinkMacSystemFont, Arial, sans-serif";
    h = babelHelpers["extends"]({}, b("SUIAudiencePlatformTheme"), d = b("SUIBusinessTheme"), {
        SUIButton: babelHelpers["extends"]({}, d.SUIButton, {
            typeStyle: babelHelpers["extends"]({}, d.SUIButton.typeStyle, {
                fontSize: "13px"
            })
        }),
        SUIText: babelHelpers["extends"]({}, d.SUIText, {
            display: {
                fontFamily: c,
                fontSize: 40,
                lineHeight: 48
            },
            header1: {
                fontFamily: c,
                fontSize: 36,
                lineHeight: 40
            },
            header2: {
                fontFamily: c,
                fontSize: 28,
                lineHeight: 32
            },
            header3: {
                fontFamily: c,
                fontSize: 24,
                lineHeight: 28
            },
            header4: {
                fontFamily: c,
                fontSize: 18,
                lineHeight: 22
            }
        }),
        SUITableDEPRECATED: babelHelpers["extends"]({}, (f = b("SUIMeasurementTheme")).SUITableDEPRECATED, {
            colors: babelHelpers["extends"]({}, f.SUITableDEPRECATED.colors, {
                rowBackground: a.white,
                headingBackground: a.white,
                cellBorder: a.cellBorder,
                headingRule: a.cellBorder,
                cellHoverBackground: "rgba(235, 236, 237, 0.2)",
                cellSelectedBackground: "rgba(203, 226, 249, 0.2)",
                cellSelectedHoverBackground: "rgba(170, 201, 255, 0.15)"
            })
        }),
        SUITable: babelHelpers["extends"]({}, f.SUITable, {
            colors: babelHelpers["extends"]({}, f.SUITable.colors, {
                bodyTopAndBottomBorder: a.cellBorder,
                border: a.cellBorder,
                hoverBackground: "rgba(235, 236, 237, 0.2)",
                selectedRow: "rgba(203, 226, 249, 0.2)",
                highlightedRow: "rgba(245, 246, 247, 0.4)"
            })
        }),
        SUITabGroup: babelHelpers["extends"]({}, d.SUITabGroup, {
            dividerColor: void 0
        }),
        SUITabItem: babelHelpers["extends"]({}, d.SUITabItem, {
            activeBorderBottomColor: "#1877F2",
            activeTypeStyle: new (b("SUITypeStyle"))({
                color: "#1877F2",
                fontFamily: c,
                fontSize: "14px"
            }),
            typeStyle: new (b("SUITypeStyle"))({
                color: "#606770",
                fontFamily: c,
                fontSize: "14px"
            }),
            hoverBorderBottomColor: "#CCD0D5"
        }),
        SUICard: babelHelpers["extends"]({}, d.SUICard, {
            body: babelHelpers["extends"]({}, d.SUICard.body),
            borderRadius: "12px"
        }),
        SUILayerHeader: babelHelpers["extends"]({}, d.SUILayerHeader, {
            backgroundColor: "#F5F6F7"
        }),
        SUIInlineNux: babelHelpers["extends"]({}, d.SUIInlineNux, {
            icon: b("React").jsx(b("Image.react"), {
                className: "_4gza",
                src: g("550428")
            })
        }),
        SUIRadioList: babelHelpers["extends"]({}, d.SUIRadioList, {
            activeBorderColor: "#8D949E",
            backgroundColor: "transparent",
            borderColor: "#8D949E",
            selectedBorderColor: "#3578E5",
            selectedDotColor: "#3578E5"
        }),
        SUISearchInput: babelHelpers["extends"]({}, d.SUISearchInput, {
            searchIcon: b("React").jsx(b("FlexLayout.react"), {
                className: "_2pis",
                children: b("React").jsx(b("Image.react"), {
                    src: g("492647")
                })
            })
        }),
        SUINotice: babelHelpers["extends"]({}, d.SUINotice),
        SUIPopover: babelHelpers["extends"]({}, d.SUIPopover, {
            boxShadow: "0 20px 90px -20px rgba(0,0,0,0.2), 0 0 #a2a9b1"
        })
    });
    e.exports = new (b("SUITheme"))({
        id: "media-manager",
        components: h
    })
}
), null);
__d("MediaManagerBlueBanner.react", ["ix", "cx", "fbt", "FlexLayout.react", "Image.react", "React", "SUIButton.react", "SUICloseButton.react", "SUIMediaManagerTheme", "SUIText.react", "SUITheme", "asset", "cxMargin"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    a = function() {
        return b("React").jsx(b("Image.react"), {
            src: g("480719")
        })
    }
    ;
    var j = new (b("SUITheme"))({
        id: "media-manager-content",
        components: babelHelpers["extends"]({}, b("SUIMediaManagerTheme"), {
            SUICloseButton: babelHelpers["extends"]({}, b("SUIMediaManagerTheme").SUICloseButton, {
                iconSize: {
                    small: 20,
                    large: 20
                },
                light: {
                    small: a,
                    large: a
                }
            })
        })
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.headerText != null ? b("React").jsx(b("SUIText.react"), {
                color: "white",
                display: "block",
                size: "header4",
                theme: j,
                weight: "bold",
                children: this.props.headerText
            }) : null
              , c = this.props.text != null ? b("React").jsx(b("SUIText.react"), {
                color: "white",
                display: "block",
                margin: this.props.headerText != null ? "_3-8x" : null,
                size: "body1",
                theme: j,
                children: this.props.text
            }) : null;
            return b("React").jsx("div", {
                className: this.props.className != null ? this.props.className : "_74lv",
                children: b("React").jsxs(b("FlexLayout.react"), {
                    align: "start",
                    direction: "horizontal",
                    children: [b("React").jsxs(b("FlexLayout.react"), {
                        className: "_6p9e",
                        direction: "vertical",
                        children: [a, c, this.props.showConfirmButton === !0 ? b("React").jsx("div", {
                            className: "_6p9f",
                            children: b("React").jsx(b("SUIButton.react"), {
                                label: this.props.confirmButtonLabel,
                                margin: "_3-8-",
                                maxWidth: "100%",
                                onClick: (a = this.props.onConfirmButtonClick) != null ? a : this.props.onClose
                            })
                        }) : null]
                    }), b("React").jsx(b("FlexLayout.react"), {
                        className: "_74lw" + (this.props.heightPrecedence === "text" ? " _74lx" : ""),
                        children: b("React").jsx(b("Image.react"), {
                            className: "_6zz9",
                            src: this.props.imageSource
                        })
                    }), this.props.showCloseButton === !0 ? b("React").jsx(b("SUICloseButton.react"), {
                        shade: "light",
                        size: "small",
                        theme: j,
                        onClick: this.props.onClose
                    }) : null]
                })
            })
        }
        ;
        return c
    }(b("React").Component);
    c.defaultProps = {
        confirmButtonLabel: i._("Got It!"),
        heightPrecedence: "image",
        showConfirmButton: !0
    };
    e.exports = c
}
), null);
