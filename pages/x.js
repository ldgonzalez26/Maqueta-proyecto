<Dialog
        classes={{
          root: classesDos.modalRoot,
          paper: classesDos.modal + " " + classesDos.modalLogin
        }}
        open={loginModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLoginModal(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classesDos.modalLoginCard}>
          <DialogTitle
            id="login-modal-slide-title"
            disableTypography
            className={classesDos.modalHeader}
          >
            <CardHeader
              plain
              color="primary"
              className={`${classesDos.textCenter} ${classesDos.cardLoginHeader}`}
            >
              <Button
                simple
                className={classesDos.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setLoginModal(false)}
              >
                {" "}
                <Close className={classesDos.modalClose} />
              </Button>
              <h5 className={classesDos.cardTitleWhite}>Log in</h5>
              <div className={classesDos.socialLine}>
                <Button justIcon link className={classesDos.socialLineButton}>
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon link className={classesDos.socialLineButton}>
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon link className={classesDos.socialLineButton}>
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </CardHeader>
          </DialogTitle>
          <DialogContent
            id="login-modal-slide-description"
            className={classesDos.modalBody}
          >
            <form>
              <p className={`${classesDos.description} ${classesDos.textCenter}`}>
                Or Be Classical
              </p>
              <CardBody className={classesDos.cardLoginBody}>
                <CustomInput
                  id="login-modal-first"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Face className={classesDos.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "First Name..."
                  }}
                />
                <CustomInput
                  id="login-modal-email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail className={classesDos.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "Email..."
                  }}
                />
                <CustomInput
                  id="login-modal-pass"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon className={classesDos.icon}>lock_outline</Icon>
                      </InputAdornment>
                    ),
                    placeholder: "Password..."
                  }}
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions
            className={`${classesDos.modalFooter} ${classesDos.justifyContentCenter}`}
          >
            <Button color="primary" simple size="lg">
              Get started
            </Button>
          </DialogActions>
        </Card>
      </Dialog>